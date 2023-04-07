import { AUTH_ROUTES } from '../../shared/constants/authRoutes';
import { AuthNavLink } from '../AuthNavLink';

import styles from './AuthNaigation.module.scss';

export const AuthNavigation = () => (
    <nav>
        <ul className={styles.nav}>
            {AUTH_ROUTES.map(route => (
                <AuthNavLink key={route.value} value={route.value} to={route.to} />
            ))}
        </ul>
    </nav>
);
