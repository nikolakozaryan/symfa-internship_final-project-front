import type { FC } from 'react';

import type { MyProps } from './types';
import { useAppSelector } from '../../../store/selectors/appSelector';

import styles from './DeliveryInfo.module.scss';

export const DeliveryInfo: FC<MyProps> = ({ type, time, destination }) => {
    const isTime = type === 'time';
    const displayTime = time && time > 0 ? `${time} minute${time === 1 ? '' : 's'}` : 'Delivered';
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <div className={styles.container}>
            <span className={`${styles.icon} ${isTime ? styles.icon_time : styles.icon_address}`} />

            <div className={styles.info}>
                <span className={styles.info__text}>{`your delivery ${type}`}</span>
                <span className={`${styles.info__value} ${isDark ? styles.info__value_dark : ''}`}>
                    {isTime ? displayTime : destination}
                </span>
            </div>
        </div>
    );
};
