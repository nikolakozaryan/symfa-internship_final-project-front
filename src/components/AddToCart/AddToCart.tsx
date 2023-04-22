import type { FC, MouseEvent } from 'react';

import type { MyProps } from './types';
import { useAppDispatch } from '../../store/services/appDispatch';
import { addToCart } from '../../store/slices/cart';

import styles from './styles.module.scss';

export const AddToCart: FC<MyProps> = ({ dish }) => {
    const dispatch = useAppDispatch();

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();

        dispatch(addToCart({ dish, amount: 1 }));
    };

    return (
        <button onClick={handleClick} className={styles.button} type="button">
            Add to Cart
        </button>
    );
};
