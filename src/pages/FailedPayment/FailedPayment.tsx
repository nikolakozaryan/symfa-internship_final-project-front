import { NavLink } from 'react-router-dom';

import { cancelPayment } from '../../shared/api/actions';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { resetCartState } from '../../store/slices/cart';
import { getPaymentId } from '../../utils/getPaymentId';

import styles from './styles.module.scss';

export const FailedPayment = () => {
    const dispatch = useAppDispatch();
    const secret = useAppSelector(state => state.cart.secret);
    const isDark = useAppSelector(state => state.theme.dark);

    const handleClick = async () => {
        if (secret) {
            const paymentId = getPaymentId(secret);

            await cancelPayment({ paymentId });
        }

        dispatch(resetCartState());
    };

    return (
        <div className={styles.container}>
            <img className={styles.image} src="assets/payment_fail.png" alt="" />
            <h2 className={`${styles.message} ${isDark ? styles.message_dark : ''}`}>Your payment was failed</h2>
            <div className={styles.link__container}>
                <NavLink className={`${styles.link} ${styles.link_rebill}`} to="../payments">
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
