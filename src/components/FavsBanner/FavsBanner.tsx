import type { FC } from 'react';

import type { MyProps } from './types';

import styles from './styles.module.scss';

export const FavsBanner:FC<MyProps> = ({ isVisible }) => (
    isVisible ? (
        <div className={styles.banner}>
            <img className={styles.banner__iamge} src="/assets/banner.png" alt="banner" />
            <div className={styles.banner__info}>
                <h3 className={styles.banner__info_title}>Free delivery</h3>
                <time className={styles.banner__info_date}>May 10 - June 21</time>
                <button className={styles.banner__button} type="button">Order Now</button>
            </div>
        </div>
    ) : null
);
