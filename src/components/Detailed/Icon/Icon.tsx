import type { FC } from 'react';

import type { MyProps } from './types';

import styles from './Icon.module.scss';

export const Icon: FC<MyProps> = ({ icon }) => (
    <span
        className={`${styles.icon__container}  ${
            icon === 'star' ? styles.icon__container_star : styles.icon__container_time
        }`}
    >
        <span className={`${styles.icon} ${icon === 'star' ? styles.icon_star : styles.icon_time}`} />
    </span>
);
