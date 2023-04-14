import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../store/services/appDispatch';
import { resetCart } from '../../store/slices/cart.slice';

import styles from './FailedPayment.module.scss';

export const FailedPayment = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(resetCart());
    };

    return (
        <div className={styles.container}>
            <img className={styles.image} src="assets/payment_fail.png" alt="" />
            <h2 className={styles.message}>Your payment was failed</h2>
            <div className={styles.link__container}>
                <NavLink className={`${styles.link} ${styles.link_rebill}`} to="../menu/order">
                    Try again
                </NavLink>
                <NavLink onClick={handleClick} className={styles.link} to="../menu/home">
                    Go to main page
                </NavLink>
            </div>
        </div>
    );
};
