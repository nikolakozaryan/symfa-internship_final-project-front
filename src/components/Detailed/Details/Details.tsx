import type { FC } from 'react';

import type { MyProps } from './types';
import { Icon } from '../Icon';

import styles from './Details.module.scss';

export const Details: FC<MyProps> = ({ rating, time }) => (
    <div className={styles.details}>
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
