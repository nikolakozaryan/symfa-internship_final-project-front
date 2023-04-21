import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { resetCartState } from '../../store/slices/cart';

import styles from './styles.module.scss';

export const FailedPayment = () => {
    const dispatch = useAppDispatch();
    const isDark = useAppSelector(state => state.theme.dark);

    const handleClick = () => {
        dispatch(resetCartState());
    };

    return (
        <div className={styles.container}>
            <img className={styles.image} src="assets/payment_fail.png" alt="" />
            <h2 className={`${styles.message} ${isDark ? styles.message_dark : ''}`}>Your payment was failed</h2>
            <div className={styles.link__container}>
                <NavLink className={`${styles.link} ${styles.link_rebill}`} to="../menu/order">
                    Try again
                </NavLink>
                <NavLink
                    onClick={handleClick}
                    className={`${styles.link} ${isDark ? styles.link_dark : ''}`}
                    to="../menu/home"
                >
                    Go to main page
                </NavLink>
            </div>
        </div>
    );
};
