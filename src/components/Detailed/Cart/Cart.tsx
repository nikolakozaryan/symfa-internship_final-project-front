import { FC, MouseEvent, useState } from 'react';

import type { MyProps } from './types';
import { cancelPayment } from '../../../shared/api/actions';
import { useAppSelector } from '../../../store/selectors/appSelector';
import { useAppDispatch } from '../../../store/services/appDispatch';
import { addToCart, resetSecret } from '../../../store/slices/cart';
import { getPaymentId } from '../../../utils/getPaymentId';

import styles from './styles.module.scss';

export const Cart: FC<MyProps> = ({ dish }) => {
    const dispatch = useAppDispatch();
    const secret = useAppSelector(state => state.cart.secret);

    const isDark = useAppSelector(state => state.theme.dark);
    const [amount, setAmount] = useState(1);

    const addManyToCart = (e: MouseEvent) => {
        e.preventDefault();

        dispatch(addToCart({ dish, amount }));
        setAmount(1);
    };

    const handleClick = async (diff: boolean) => {
        if (secret) {
            const paymentId = getPaymentId(secret);

            await cancelPayment({ paymentId });
            dispatch(resetSecret());
        }

        setAmount(prev => {
            const newValue = prev + (diff ? 1 : -1);

            return newValue || 1;
        });
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
                    className={`${styles.input} ${isDark ? styles.input_dark : ''}`}
                    value={amount}
                    type="number"
                />
            </div>
            <button onClick={addManyToCart} className={styles.add} type="button">
                Add to Cart
            </button>
        </div>
    );
};
