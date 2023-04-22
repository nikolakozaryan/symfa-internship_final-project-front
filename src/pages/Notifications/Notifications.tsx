
import { DeliveryItem } from '../../components/DeliveryItem';
import { useAppSelector } from '../../store/selectors/appSelector';

import styles from './styles.module.scss';

export const Notifications = () => {
    const deliveries = useAppSelector(state => state.delivery.deliveries);
    const isDark = useAppSelector(state => state.theme.dark);

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
