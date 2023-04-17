import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { toggleTheme } from '../../store/slices/theme.slice';

import styles from './ThemeToggler.module.scss';

export const ThemeToggler = () => {
    const dispatch = useAppDispatch();
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <button
            className={`${styles.toggler} ${isDark ? styles.toggler_active : ''}`}
            type="button"
            onClick={() => {
                dispatch(toggleTheme());
            }}
        >
            <span className={styles.toggler__helper} />
            <span className={styles.toggler__marker} />
        </button>
    );
};
