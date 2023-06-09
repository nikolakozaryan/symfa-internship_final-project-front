import { useAppSelector } from '../../store/selectors/appSelector';
import { AddPaymentMethod } from '../AddPaymentMethod';
import { CreditCard } from '../CreditCard';
import { PaymentMethods } from '../PaymentMethods';

import styles from './styles.module.scss';

export const Payments = () => {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <section className={styles.payments}>
            <div className={styles.payments__section}>
                <h3
                    className={`${styles.payments__section__heading} ${
                        isDark ? styles.payments__section__heading_dark : ''
                    }`}
                >
                    My card
                </h3>
                <div className={styles.payments__section__container}>
                    <CreditCard />
                    <AddPaymentMethod />
                </div>
            </div>
            <div className={styles.payments__section}>
                <h3
                    className={`${styles.payments__section__heading} ${
                        isDark ? styles.payments__section__heading_dark : ''
                    }`}
                >
                    Payment Method
                </h3>
                <div className={styles.payments__section__container}>
                    <PaymentMethods />
                    <AddPaymentMethod />
                </div>
            </div>
        </section>
    );
};
