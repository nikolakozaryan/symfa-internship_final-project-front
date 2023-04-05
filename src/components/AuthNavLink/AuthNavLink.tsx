import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import type { MyProps } from './types';

import styles from './AuthNavLink.module.scss';

export const AuthNavLink: FC<MyProps> = ({ value, to }) => {
    const getStyles = ({ isActive }: { isActive: boolean }) => {
        const basicStyle = styles.link;
        const activeStyle = isActive ? styles.link__active : '';

        return [basicStyle, activeStyle].join(' ').trim();
    };

    return (
        <li>
            <NavLink className={getStyles} to={to}>
                {value}
            </NavLink>
        </li>
    );
};
