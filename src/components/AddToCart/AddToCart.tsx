import type { FC } from 'react';

import type { MyProps } from './types';

import styles from './AddToCart.module.scss';

export const AddToCart:FC<MyProps> = () => (
    <button className={styles.button} type="button">
        Add to Cart
    </button>
);
