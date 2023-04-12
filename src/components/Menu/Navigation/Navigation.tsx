import { MENU_LINKS } from '../../../shared/constants/menuRoutes';
import { MenuLink } from '../Link';

import styles from './Navigation.module.scss';

export const MenuNavigation = () => (
    <nav className={styles.nav}>
        {MENU_LINKS.map(link => (
            <MenuLink key={link.id} icon={link.icon} routeTo={link.routeTo} />
        ))}
    </nav>
);
