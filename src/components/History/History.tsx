import { useEffect } from 'react';

import { getOrders } from '../../shared/api/actions';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { OrderHistoryItem } from '../OrderHistoryItem';

import styles from './styles.module.scss';

export const History = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(state => state.order.orders);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            {orders.map(order => (
                <OrderHistoryItem key={order.id} {...order} />
            ))}
        </div>
    );
};
