import type { FC } from 'react';

import type { MyProps } from './types';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { changeAmount, resetSecret } from '../../store/slices/cart.slice';

import styles from './AmountPicker.module.scss';

export const AmountPicker: FC<MyProps> = ({ amount, dishId }) => {
    const dispatch = useAppDispatch();
    const secret = useAppSelector(state => state.cart.secret);
    const isDark = useAppSelector(state => state.theme.dark);

    const handleClick = (add: boolean) => {
        if (secret) dispatch(resetSecret());

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
