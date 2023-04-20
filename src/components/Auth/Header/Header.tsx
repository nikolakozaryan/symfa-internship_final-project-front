import { useAppSelector } from '../../../store/selectors/appSelector';
import { Error } from '../Error';
import { Navigation } from '../Navigation';

import styles from './Header.module.scss';

export const Header = () => {
    const isDark = useAppSelector(state => state.theme.dark);
    const authError = useAppSelector(state => state.auth.errorMessage);

    return (
        <header className={`${styles.header} ${isDark ? styles.header_dark : ''}`}>
            <Error error={authError} />
            <div className={styles.header__logo} />
            <h1 className={styles.header__title}>Corner Food</h1>
            <p className={styles.header__title_sub}>Delivery App</p>
            <Navigation />
        </header>
    );
};
