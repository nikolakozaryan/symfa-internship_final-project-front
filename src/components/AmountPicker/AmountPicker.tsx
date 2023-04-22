import type { FC } from 'react';

import type { MyProps } from './types';
import { cancelPayment } from '../../shared/api/actions';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { changeAmount, resetSecret } from '../../store/slices/cart';
import { getPaymentId } from '../../utils/getPaymentId';

import styles from './styles.module.scss';

export const AmountPicker: FC<MyProps> = ({ amount, dishId }) => {
    const dispatch = useAppDispatch();
    const secret = useAppSelector(state => state.cart.secret);
    const isDark = useAppSelector(state => state.theme.dark);

    const handleClick = async (add: boolean) => {
        if (secret) {
            const paymentId = getPaymentId(secret);

            await cancelPayment({ paymentId });
            dispatch(resetSecret());
        }

        dispatch(changeAmount({ id: dishId, newAmount: amount + (add ? 1 : -1) }));
    };

    return (
        <>
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
        </>
    );
};
