import { FC, MouseEvent, useState } from 'react';

import type { CartDish } from '../../../store/slices/types';
import type { MyProps } from './types';
import { useAppSelector } from '../../../store/selectors/appSelector';
import { useAppDispatch } from '../../../store/services/appDispatch';
import { addToCart, changeAmount, resetSecret } from '../../../store/slices/cart.slice';

import styles from './Cart.module.scss';

export const Cart: FC<MyProps> = ({ dish }) => {
    const dispatch = useAppDispatch();
    const cartDishes = useAppSelector(state => state.cart.dishes);
    const secret = useAppSelector(state => state.cart.secret);
    const cartDish = cartDishes.find(item => item.dish.id === dish.id);
    const inCart = !!cartDish;
    const [amount, setAmount] = useState(1);

    const addManyToCart = (e: MouseEvent) => {
        e.preventDefault();

        dispatch(addToCart({ dish, amount }));
    };

    const handleClick = (diff: boolean) => {
        if (secret) dispatch(resetSecret());

        if (inCart) {
            dispatch(changeAmount({ id: dish.id, newAmount: cartDish.amount + (diff ? 1 : -1) }));
        } else {
            setAmount(prev => {
                const newValue = prev + (diff ? 1 : -1);

                return newValue || 1;
            });
        }
    };

    return (
        <div className={styles.cart}>
            <div className={styles.cart__picker}>
                <button
                    className={`${styles.button} ${styles.button_plus}`}
                    type="button"
                    onClick={() => handleClick(true)}
                />
                <button
                    className={`${styles.button} ${styles.button_minus}`}
                    type="button"
                    onClick={() => handleClick(false)}
                />
                <input
                    disabled
                    className={styles.input}
                    value={inCart ? (cartDishes.find(item => item.dish.id === dish.id) as CartDish).amount : amount}
                    type="number"
                />
            </div>
            <button disabled={inCart} onClick={addManyToCart} className={styles.add} type="button">
                Add to Cart
            </button>
        </div>
    );
};
