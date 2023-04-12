import type { FC } from 'react';

import type { MyProps } from './types';
import { AmountPicker } from '../../AmountPicker';

import styles from './CartItem.module.scss';

export const CartItem: FC<MyProps> = ({ cartDish }) => {
    const {
        dish: { id, image, product, productName, price },
        amount,
    } = cartDish;

    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={image} alt={product} />
            </div>
            <div className={styles.info}>
                <p className={styles.info__title}>{product}</p>
                <p className={styles.info__name}>{productName}</p>
                <p className={styles.info__price}>
                    <span className={styles.currency}>$</span>
                    {price.toFixed(2)}
                </p>
                <span className={styles.picker}>
                    <AmountPicker dishId={id} amount={amount} />
                </span>
            </div>
        </div>
    );
};
