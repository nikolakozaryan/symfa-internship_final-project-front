import type { FC } from 'react';

import type { MyProps } from './types';
import { useAppSelector } from '../../../store/selectors/appSelector';

import styles from './styles.module.scss';

export const PaymentMethod: FC<MyProps> = ({ icon, id, label }) => {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <label className={`${styles.label} ${isDark ? styles.label_dark : ''}`} htmlFor={id}>
            <img className={styles.label__icon} src={icon} alt="" />
            <span className={styles.label__text}>{label}</span>

            <input className={styles.input} id={id} name="payment-method" type="radio" />
            <span className={styles.radio}>
                <span className={styles.radio__active} />
            </span>
        </label>
    );
};
