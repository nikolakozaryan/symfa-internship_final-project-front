import type { FC } from 'react';

import type { MyProps } from './types';

import styles from './Header.module.scss';

export const Header: FC<MyProps> = ({ currentDish }) => (
    <header className={styles.header}>
        <div>
            <h3 className={styles.header_name}>{currentDish?.product}</h3>
            <h5 className={styles.header_productname}>{currentDish?.productName}</h5>
        </div>

        <p className={styles.header_price}>
            <span className={styles.header_price_currency}>$</span>
            {currentDish?.price.toFixed(2)}
        </p>
    </header>
);
