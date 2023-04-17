import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../../../store/selectors/appSelector';
import { useAppDispatch } from '../../../store/services/appDispatch';
import { resetError } from '../../../store/slices/auth.slice';
import { Error } from '../Error';
import { Navigation } from '../Navigation';

import styles from './Header.module.scss';

export const Header = () => {
    const isDark = useAppSelector(state => state.theme.dark);
    const dispatch = useAppDispatch();
    const authError = useAppSelector(state => state.auth.errorMessage);
    const location = useLocation();

    useEffect(() => {
        dispatch(resetError());
    }, [dispatch, location]);

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
