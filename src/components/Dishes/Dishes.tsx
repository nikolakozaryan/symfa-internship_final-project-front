import { FC, UIEventHandler, useEffect } from 'react';

import type { MyProps } from '../MenuHeader/types';
import { getDishes, getFavs } from '../../shared/api/actions/menu';
import { MenuRoutes } from '../../shared/constants/menuRoutes';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { DishCard } from '../DishCard';
import { NothingFound } from '../NothingFound';

import styles from './Dishes.module.scss';

export const Dishes:FC<MyProps> = ({ pageType, bannerVisible }) => {
    const isHome = pageType === MenuRoutes.Home;
    const isFav = pageType === MenuRoutes.Favorite;
    const {
        dishes, page, pages, search,
    } = useAppSelector(state => (isHome ? state.menu : state.fav));
    const type = useAppSelector(state => state.menu.type);
    const taste = useAppSelector(state => state.fav.taste);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!dishes.length) {
            isHome
                ? dispatch(getDishes({ type, page, search }))
                : dispatch(getFavs({ taste, page, search }));
        }
    }, [dishes.length, dispatch, isHome, page, search, taste, type]);

    const handleScroll: UIEventHandler<HTMLDivElement> = e => {
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop <= e.currentTarget.clientHeight;

        if (bottom && page < pages) {
            if (isHome) {
                dispatch(getDishes({ type, page: page + 1, search }));
            }

            if (isFav) {
                dispatch(getFavs({ taste, page: page + 1, search }));
            }
        }
    };

    const firstTwoFavs = (
        <div className={styles.container}>
            <div className={styles.dishes}>
                {dishes.length ? dishes.slice(0, 2).map(dish => (
                    <DishCard key={dish.id} {...dish} />
                )) : <NothingFound />}
            </div>
        </div>

    );

    const allDishes = (
        <div className={styles.container} onScroll={handleScroll}>
            <div className={styles.dishes}>
                {dishes.length ? dishes.map(dish => (
                    <DishCard key={dish.id} {...dish} />
                )) : <NothingFound />}
            </div>
        </div>
    );

    return isFav && bannerVisible ? firstTwoFavs : allDishes;
};
