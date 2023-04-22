import { FC, useCallback, useEffect, useRef } from 'react';

import type { Dish } from '../../store/types/dish';
import type { MyProps } from '../Menu/Header/types';
import { getDishes, getFavs } from '../../shared/api/actions';
import { MenuRoutes } from '../../shared/enums/menuRoutes';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { DishCard } from '../DishCard';
import { NothingFound } from '../NothingFound';

import styles from './styles.module.scss';

export const Dishes: FC<MyProps> = ({ pageType, bannerVisible }) => {
    const observer = useRef<IntersectionObserver>();
    const isHome = pageType === MenuRoutes.Home;
    const isFav = pageType === MenuRoutes.Favorite;
    const { dishes, page, pages, search, isLoading } = useAppSelector(state => (isHome ? state.menu : state.fav));
    const type = useAppSelector(state => state.menu.type);
    const taste = useAppSelector(state => state.fav.taste);
    const dispatch = useAppDispatch();

    const lastCardRef = useCallback(
        (node: HTMLDivElement) => {
            if (observer.current) {
                observer.current.disconnect();
            }

            observer.current = new IntersectionObserver(entries => {
                const entry = entries[0];

                if (entry.isIntersecting && page < pages) {
                    if (isHome) {
                        dispatch(getDishes({ type, page: page + 1, search }));
                    }

                    if (isFav) {
                        dispatch(getFavs({ taste, page: page + 1, search }));
                    }
                }
            });

            if (node) {
                observer.current.observe(node);
            }
        },
        [dispatch, isFav, isHome, page, pages, search, taste, type],
    );

    const getDisplayedCards = useCallback(
        (dishesArr: Dish[], loading: boolean, fav: boolean, banner: boolean): JSX.Element | JSX.Element[] => {
            const cards = dishesArr.map((dish: Dish, index: number) => (
                <DishCard ref={dishesArr.length - 1 === index ? lastCardRef : null} key={dish.id} {...dish} />
            ));

            if (!cards.length && !loading) return <NothingFound />;

            return fav && banner ? cards.slice(0, 2) : cards;
        },
        [lastCardRef],
    );

    useEffect(() => {
        if (!dishes.length) {
            isHome ? dispatch(getDishes({ type, page, search })) : dispatch(getFavs({ taste, page, search }));
        }
    }, [dishes.length, dispatch, isFav, isHome, page, pages, search, taste, type]);

    return (
        <div className={styles.container}>
            <div className={styles.dishes}>{getDisplayedCards(dishes, isLoading, isFav, !!bannerVisible)}</div>
        </div>
    );
};
