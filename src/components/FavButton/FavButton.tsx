import type { FC, MouseEvent } from 'react';

import type { MyProps } from './types';
import { toggleFav } from '../../shared/api/actions';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { FavIcon } from './FavIcon';

import styles from './styles.module.scss';

export const FavButton: FC<MyProps> = ({ id, large }) => {
    const favs = useAppSelector(state => state.user.favs);
    const isFav = favs.includes(id);
    const dispatch = useAppDispatch();

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        dispatch(toggleFav({ dishId: id }));
    };

    return (
        <button onClick={handleClick} className={`${styles.fav} ${large ? styles.fav_large : ''}`} type="button">
            <FavIcon isFav={isFav} />
        </button>
    );
};
