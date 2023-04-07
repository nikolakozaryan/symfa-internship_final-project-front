import { MENU_LINKS } from '../../shared/constants/menuRoutes';
import { MenuNavLink } from '../MenuNavLink';

import styles from './MenuNavigation.module.scss';

export const MenuNavigation = () => (
    <nav className={styles.nav}>
        {MENU_LINKS.map(link => (
            <MenuNavLink key={link.id} icon={link.icon} routeTo={link.routeTo} />
        ))}
    </nav>
);
