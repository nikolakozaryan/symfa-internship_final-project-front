import type { FC } from 'react';

import type { MyProps } from './types';

import styles from './About.module.scss';

export const About: FC<MyProps> = ({ description }) => (
    <div className={styles.about}>
        <h4 className={styles.about_heading}>About</h4>
        <p className={styles.about_content}>{description}</p>
    </div>
);
