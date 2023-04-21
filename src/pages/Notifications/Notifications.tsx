import { useEffect } from 'react';

import { DeliveryItem } from '../../components/DeliveryItem';
import { getDeliveries } from '../../shared/api/actions';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';

import styles from './styles.module.scss';

export const Notifications = () => {
    const dispatch = useAppDispatch();
    const { deliveries, errorMessage } = useAppSelector(state => state.delivery);
    const isDark = useAppSelector(state => state.theme.dark);

    useEffect(() => {
        if (!deliveries.length && errorMessage !== 'SUCCESS') {
            dispatch(getDeliveries());
        }
    }, [deliveries, dispatch, errorMessage]);

    return (
        <section className={styles.notifications}>
            <h2 className={`${styles.notifications__heading} ${isDark ? styles.dark : ''}`}>Notifications</h2>
            <div className={styles.notifications__list__container}>
                <div className={styles.notifications__list}>
                    {deliveries.map(delivery => (
                        <DeliveryItem key={delivery.id} {...delivery} />
                    ))}
                </div>
            </div>
        </section>
    );
};
