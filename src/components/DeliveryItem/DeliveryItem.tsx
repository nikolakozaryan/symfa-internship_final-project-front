import { FC, useEffect, useState } from 'react';

import type { IDeliveryData } from '../../store/types/delivery';
import { API_URL } from '../../shared/constants/baseURL';
import { useAppSelector } from '../../store/selectors/appSelector';
import { DeliveryInfo } from './DeliveryInfo';

import styles from './DeliveryItem.module.scss';

export const DeliveryItem: FC<IDeliveryData> = ({ destination, deliveryDate, deliveryman }) => {
    const [time, setTime] = useState(0);
    const isDark = useAppSelector(state => state.theme.dark);

    useEffect(() => {
        const minutes = Math.ceil((deliveryDate.getTime() - Date.now()) / 1000 / 60);

        setTime(minutes);

        const interval = setInterval(() => {
            setTime(prev => prev - 1);
        }, 60 * 1000);

        if (time < 1) {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [deliveryDate, time]);

    return (
        <div className={`${styles.item__container} ${isDark ? styles.item__container_dark : ''}`}>
            <div className={styles.item__deliveryman}>
                <img
                    className={styles.item__deliveryman__avatar}
                    src={`${API_URL}/${deliveryman.avatar}`}
                    alt="avatar"
                />
                <div className={styles.item__deliveryman__info}>
                    <span
                        className={`${styles.item__deliveryman__info_name} ${
                            isDark ? styles.item__deliveryman__info_name_dark : ''
                        }`}
                    >
                        {deliveryman.name}
                    </span>
                    <span className={styles.item__deliveryman__info_id}>{`ID: ${deliveryman.id}`}</span>
                    <span className={styles.item__deliveryman__info_title}>Food courier</span>
                </div>
                <a
                    className={time > 0 ? styles.item__deliveryman__call : styles.item__deliveryman__call_disabled}
                    href={time ? 'tel:+1234567890' : ''}
                >
                    <img className={styles.icon} src="/assets/icons/call.svg" alt="phone" />
                </a>
            </div>
            <div className={styles.item__info}>
                <DeliveryInfo type="time" time={time} />
                <DeliveryInfo type="address" destination={destination} />
            </div>
        </div>
    );
};
