import { useAppSelector } from '../../../store/selectors/appSelector';

import styles from './Total.module.scss';

export const Total = () => {
    const cartDishes = useAppSelector(state => state.cart.dishes);
    const price = `$${cartDishes.reduce((sum, cur) => sum + cur.amount * cur.dish.price, 0).toFixed(2)}`;

    return (
        <div className={styles.receipt}>
            <div className={styles.receipt__details}>
                <span>Subtotal</span>
                <span>{price}</span>
            </div>
            <div className={styles.receipt__details}>
                <span>Delivery</span>
                <span>Free</span>
            </div>
            <div className={styles.receipt__total}>
                <span>Total</span>
                <span className={styles.receipt__total_price}>{price}</span>
            </div>
        </div>
    );
};
