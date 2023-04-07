import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import type { MyProps } from './types';

import styles from './MenuNavLink.module.scss';

export const MenuNavLink: FC<MyProps> = ({ icon, routeTo }) => {
    const getClasses = ({ isActive }: { isActive: boolean }) => {
        const routeClass = routeTo === 'order' ? styles.order : '';
        const activeClass = isActive ? styles['link-active'] : '';

        return [routeClass, activeClass].join(' ').trim();
    };

    return (
        <NavLink to={routeTo} className={getClasses}>
            {icon}
        </NavLink>
    );
};
