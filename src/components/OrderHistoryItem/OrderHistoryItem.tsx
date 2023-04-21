import type { FC } from 'react';

import type { OrdersResponse } from '../../store/types/order';
import { useAppSelector } from '../../store/selectors/appSelector';
import { parseDate } from '../../utils/parseDate';

import styles from './styles.module.scss';

export const OrderHistoryItem: FC<OrdersResponse> = ({ createdAt, dishes, totalPrice }) => {
    const isDark = useAppSelector(state => state.theme.dark);
    const price = `$${totalPrice.toFixed(2)}`;

    return (
        <div className={`${styles.order} ${isDark ? styles.order_dark : ''}`}>
            <div className={styles.order__date}>{parseDate(createdAt)}</div>
            {dishes.map(dish => (
                <div key={dish.id} className={styles.order__dish}>
                    {dish.productName}
                </div>
            ))}
            <div className={styles.order__total}>
                <span>Total</span>
                <span className={styles.order__total_price}>{price}</span>
            </div>
        </div>
    );
};
