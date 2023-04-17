import type { FC } from 'react';

import type { MyProps } from './types';
import { useAppSelector } from '../../../store/selectors/appSelector';

import styles from './Header.module.scss';

export const Header: FC<MyProps> = ({ currentDish }) => {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <header className={styles.header}>
            <div>
                <h3 className={`${styles.header_name} ${isDark ? styles.header_name_dark : ''}`}>
                    {currentDish?.product}
                </h3>
                <h5 className={styles.header_productname}>{currentDish?.productName}</h5>
            </div>

            <p className={`${styles.header_price} ${isDark ? styles.header_price_dark : ''}`}>
                <span className={styles.header_price_currency}>$</span>
                {currentDish?.price.toFixed(2)}
            </p>
        </header>
    );
};
