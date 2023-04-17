import type { FC } from 'react';

import type { MyProps } from './types';
import { useAppSelector } from '../../../store/selectors/appSelector';

import styles from './About.module.scss';

export const About: FC<MyProps> = ({ description }) => {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <div className={styles.about}>
            <h4 className={`${styles.about_heading} ${isDark ? styles.about_heading_dark : ''}`}>About</h4>
            <p className={styles.about_content}>{description}</p>
        </div>
    );
};
