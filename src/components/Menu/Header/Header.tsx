import type { FC } from 'react';

import type { MyProps } from './types';
import { Avatar } from '../../Avatar';

import styles from './Header.module.scss';

export const Header: FC<MyProps> = ({ pageType }) => {
    const word = pageType === 'favorite' ? 'Favorite' : 'Quality';

    return (
        <header className={styles.home__header}>
            <h2 className={styles.home__heading}>
                Let’s eat
                <br />
                {`${word} food`}
            </h2>
            <Avatar />
        </header>
    );
};