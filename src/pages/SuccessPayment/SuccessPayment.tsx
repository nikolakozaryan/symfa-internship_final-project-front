import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../store/selectors/appSelector';

import styles from './styles.module.scss';

export const SuccessPayment = () => {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <div className={styles.container}>
            <img className={styles.image} src="assets/payment_success.png" alt="" />
            <h2 className={`${styles.message} ${isDark ? styles.message_dark : ''}`}>Your payment was successfull</h2>
            <NavLink className={styles.link} to="../menu/home">
                Go to main page
            </NavLink>
        </div>
    );
};
