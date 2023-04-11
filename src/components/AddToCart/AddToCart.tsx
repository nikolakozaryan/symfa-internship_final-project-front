import type { FC, MouseEvent } from 'react';

import type { MyProps } from './types';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { addToCart } from '../../store/slices/cart.slice';

import styles from './AddToCart.module.scss';

export const AddToCart: FC<MyProps> = ({ dish }) => {
    const dispatch = useAppDispatch();
    const cartDishes = useAppSelector(state => state.cart.dishes);
    const inCart = !!cartDishes.find(cartDish => cartDish.dish.id === dish.id);

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();

        dispatch(addToCart({ dish, amount: 1 }));
    };

    return (
        <button disabled={inCart} onClick={handleClick} className={styles.button} type="button">
            Add to Cart
        </button>
    );
};
