import { PROFILE_LINKS } from '../../../shared/constants/profileRoutes';
import { Link } from '../Link';

import styles from './Navigation.module.scss';

export const Navigation = () => (
    <nav>
        <ul className={styles.nav}>
            {PROFILE_LINKS.map(link => (
                <Link key={link.id} to={link.routeTo} value={link.routeTo} />
            ))}
        </ul>
    </nav>
);
