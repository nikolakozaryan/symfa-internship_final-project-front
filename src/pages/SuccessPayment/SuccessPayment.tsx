import { NavLink } from 'react-router-dom';

import styles from './SuccessPayment.module.scss';

export const SuccessPayment = () => (
    <div className={styles.container}>
        <img className={styles.image} src="assets/payment_success.png" alt="" />
        <h2 className={styles.message}>Your payment was successfull</h2>
        <NavLink className={styles.link} to="../menu/home">
            Go to main page
        </NavLink>
    </div>
);
