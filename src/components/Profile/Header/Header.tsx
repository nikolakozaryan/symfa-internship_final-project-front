import { useAppSelector } from '../../../store/selectors/appSelector';
import { Navigation } from '../Navigation';
import { UserInfo } from '../UserInfo';

import styles from './Header.module.scss';

export const Header = () => {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <header className={`${styles.header} ${isDark ? styles.header_dark : ''}`}>
            <h2 className={styles.header__heading}>My Profile</h2>
            <UserInfo />
            <Navigation />
        </header>
    );
};
