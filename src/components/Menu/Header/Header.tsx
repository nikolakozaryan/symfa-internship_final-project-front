import type { FC } from 'react';

import type { MyProps } from './types';
import { useAppSelector } from '../../../store/selectors/appSelector';
import { Avatar } from '../../Avatar';

import styles from './Header.module.scss';

export const Header: FC<MyProps> = ({ pageType }) => {
    const isDark = useAppSelector(state => state.theme.dark);
    const word = pageType === 'favorite' ? 'Favorite' : 'Quality';

    return (
        <header className={styles.home__header}>
            <h2 className={`${styles.home__heading} ${isDark ? styles.home__heading_dark : ''}`}>
                Let’s eat
                <br />
                {`${word} food`}
            </h2>
            <div className={styles.home__avatar}>
                <Avatar />
            </div>
        </header>
    );
};
