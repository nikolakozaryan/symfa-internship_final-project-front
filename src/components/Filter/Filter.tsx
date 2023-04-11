import type { FC, WheelEventHandler } from 'react';

import type { MyProps } from '../MenuHeader/types';
import { DISH_TASTE, DISH_TYPES } from '../../shared/constants/dishes';
import { MenuRoutes } from '../../shared/constants/menuRoutes';
import { useAppSelector } from '../../store/selectors/appSelector';
import { FilterItem } from '../FilterItem';

import styles from './Filter.module.scss';

export const Filter:FC<MyProps> = ({ pageType }) => {
    const dishType = useAppSelector(state => state.menu.type);
    const dishTaste = useAppSelector(state => state.fav.taste);

    const handleScroll: WheelEventHandler = e => {
        e.stopPropagation();
        const element = e.currentTarget as HTMLDivElement;

        element.scrollBy({
            left: e.deltaY * 1.5,
        });
    };

    const TypeList = DISH_TYPES.map(type => (
        <FilterItem
            key={type}
            pageType={pageType}
            active={type === dishType}
            type={type}
        />
    ));

    const TasteList = DISH_TASTE.map(taste => (
        <FilterItem
            key={taste}
            pageType={pageType}
            active={taste === dishTaste}
            taste={taste}
        />
    ));

    return (
        <div className={styles.filter__container} onWheel={handleScroll}>
            <ul className={styles.filter}>
                {pageType === MenuRoutes.Home ? TypeList : TasteList}
            </ul>
        </div>
    );
};
