import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { resetAuthState } from '../../store/slices/auth.slice';
import { resetUserState } from '../../store/slices/user.slice';
import { ThemeToggler } from '../ThemeToggler';

import styles from './Account.module.scss';

export const Account = () => {
    const isDark = useAppSelector(state => state.theme.dark);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        localStorage.clear();
        dispatch(resetAuthState());
        dispatch(resetUserState());
    };

    return (
        <div className={styles.account}>
            <p className={`${styles.account__option} ${isDark ? styles.account__option_dark : ''}`}>
                <span>Dark mode</span>
                <ThemeToggler />
            </p>
            <button className={styles.logout} onClick={handleClick} type="button">
                sign out
            </button>
        </div>
    );
};
