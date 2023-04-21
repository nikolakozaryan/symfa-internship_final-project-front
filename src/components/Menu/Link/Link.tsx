import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import type { MyProps } from './types';
import { useAppSelector } from '../../../store/selectors/appSelector';

import styles from './styles.module.scss';

export const MenuLink: FC<MyProps> = ({ icon, routeTo }) => {
    const isDark = useAppSelector(state => state.theme.dark);
    const getClasses = ({ isActive }: { isActive: boolean }) => {
        const routeClass = routeTo === 'order' ? styles.order : '';
        const darkClass = isDark && routeClass ? styles.order_dark : '';
        const activeClass = isActive ? styles['link-active'] : '';

        return [routeClass, darkClass, activeClass].join(' ').trim();
    };

    return (
        <NavLink to={routeTo} className={getClasses}>
            {icon}
        </NavLink>
    );
};
