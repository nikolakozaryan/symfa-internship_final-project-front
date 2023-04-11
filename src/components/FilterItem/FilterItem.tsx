import type { FC } from 'react';

import type { MyProps } from './types';
import { useAppDispatch } from '../../store/services/appDispatch';
import { setFavTaste } from '../../store/slices/fav.slice';
import { setType } from '../../store/slices/menu.slice';

import styles from './FilterItem.module.scss';

export const FilterItem: FC<MyProps> = ({ type, taste, active }) => {
    const dispatch = useAppDispatch();

    const handleCLick = () => {
        if (type) {
            dispatch(setType(type));
        }

        if (taste) {
            dispatch(setFavTaste(taste));
        }
    };

    return (
        <li>
            <button
                onClick={handleCLick}
                type="button"
                className={`${styles.item} ${active ? styles.item_active : ''}`}
            >
                {type || taste}
            </button>
        </li>
    );
};
