import type { FC } from 'react';

import type { MyProps } from './types';
import { useAppSelector } from '../../../store/selectors/appSelector';
import { Icon } from '../Icon';

import styles from './styles.module.scss';

export const Details: FC<MyProps> = ({ rating, time }) => {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <div className={`${styles.details} ${isDark ? styles.details_dark : ''}`}>
            <p className={styles.container}>
                <Icon icon="star" />
                {rating}
            </p>

            <p className={styles.container}>
                <Icon icon="time" />
                {`${time} min`}
            </p>
        </div>
    );
};
