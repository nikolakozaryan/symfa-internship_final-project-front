import { AddPaymentMethod } from '../AddPaymentMethod';
import { CreditCard } from '../CreditCard';
import { PaymentMethods } from '../PaymentMethods';

import styles from './Payments.module.scss';

export const Payments = () => (
    <section className={styles.payments}>
        <div className={styles.payments__section}>
            <h3 className={styles.payments__section__heading}>My card</h3>
            <div className={styles.payments__section__container}>
                <CreditCard />
                <AddPaymentMethod />
            </div>
        </div>
        <div className={styles.payments__section}>
            <h3 className={styles.payments__section__heading}>Payment Method</h3>
            <div className={styles.payments__section__container}>
                <PaymentMethods />
                <AddPaymentMethod />
            </div>
        </div>
    </section>
);
