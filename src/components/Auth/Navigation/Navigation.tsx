import { AUTH_ROUTES } from '../../../shared/constants/authRoutes';
import { Link } from '../Link';

import styles from './Naigation.module.scss';

export const Navigation = () => (
    <nav>
        <ul className={styles.nav}>
            {AUTH_ROUTES.map(route => (
                <Link key={route.value} value={route.value} to={route.to} />
            ))}
        </ul>
    </nav>
);
