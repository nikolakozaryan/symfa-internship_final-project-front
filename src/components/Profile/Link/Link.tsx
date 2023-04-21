import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import type { MyProps } from './types';
import { useAppSelector } from '../../../store/selectors/appSelector';

import styles from './styles.module.scss';

export const Link: FC<MyProps> = ({ value, to }) => {
    const isDark = useAppSelector(state => state.theme.dark);
    const getStyles = ({ isActive }: { isActive: boolean }) => {
        const basicStyle = styles.link;
        const dartStyle = isDark ? styles.link_dark : '';
        const activeStyle = isActive ? styles.link_active : '';

        return [basicStyle, dartStyle, activeStyle].join(' ').trim();
    };

    return (
        <li>
            <NavLink className={getStyles} to={to}>
                {value}
            </NavLink>
        </li>
    );
};
