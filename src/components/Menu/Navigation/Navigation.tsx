import { MENU_LINKS } from '../../../shared/constants/menuRoutes';
import { useAppSelector } from '../../../store/selectors/appSelector';
import { MenuLink } from '../Link';

import styles from './Navigation.module.scss';

export const MenuNavigation = () => {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <nav className={`${styles.nav} ${isDark ? styles.nav_dark : ''}`}>
            {MENU_LINKS.map(link => (
                <MenuLink key={link.id} icon={link.icon} routeTo={link.routeTo} />
            ))}
        </nav>
    );
};
