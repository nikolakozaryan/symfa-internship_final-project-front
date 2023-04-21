import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { resetAuthState } from '../../store/slices/auth';
import { resetCartState } from '../../store/slices/cart';
import { resetDeliveryState } from '../../store/slices/delivery';
import { resetFavState } from '../../store/slices/fav';
import { resetMenuState } from '../../store/slices/menu';
import { resetOrderState } from '../../store/slices/order';
import { resetUserState } from '../../store/slices/user';
import { ThemeToggler } from '../ThemeToggler';

import styles from './styles.module.scss';

export const Account = () => {
    const isDark = useAppSelector(state => state.theme.dark);
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(resetUserState());
        dispatch(resetAuthState());
        dispatch(resetCartState());
        dispatch(resetDeliveryState());
        dispatch(resetFavState());
        dispatch(resetMenuState());
        dispatch(resetOrderState());
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
