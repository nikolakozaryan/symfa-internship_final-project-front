import type { FC } from 'react';

import type { MyProps } from './types';
import { useAppDispatch } from '../../store/services/appDispatch';
import { changeAmount } from '../../store/slices/cart.slice';

import styles from './AmountPicker.module.scss';

export const AmountPicker: FC<MyProps> = ({ amount, dishId }) => {
    const dispatch = useAppDispatch();

    const handleClick = (add: boolean) => {
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
            <input disabled className={styles.input} value={amount} type="number" />
        </>
    );
};
