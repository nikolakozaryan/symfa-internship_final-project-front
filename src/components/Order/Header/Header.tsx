import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../store/selectors/appSelector';

import styles from './Header.module.scss';

export const Header = () => {
    const isDark = useAppSelector(state => state.theme.dark);
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <h2 className={`${styles.header__title} ${isDark ? styles.header__title_dark : ''}`}>My Order</h2>
            <button
                className={`${styles.header__button} ${isDark ? styles.header__button_dark : ''}`}
                type="button"
                onClick={() => {
                    navigate('../menu/home');
                }}
            />
        </header>
    );
};
