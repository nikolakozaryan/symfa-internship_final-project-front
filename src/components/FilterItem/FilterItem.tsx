import type { FC } from 'react';

import type { MyProps } from './types';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { setFavTaste } from '../../store/slices/fav';
import { setType } from '../../store/slices/menu';

import styles from './styles.module.scss';

export const FilterItem: FC<MyProps> = ({ type, taste, active }) => {
    const isDark = useAppSelector(state => state.theme.dark);
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
                className={`${styles.item} ${active ? styles.item_active : ''} ${isDark ? styles.item_dark : ''}`}
            >
                {type || taste}
            </button>
        </li>
    );
};
