import { PAYMENT_METHODS } from '../../shared/constants/paymentMethods';
import { useAppSelector } from '../../store/selectors/appSelector';
import { PaymentMethod } from './PaymentMethod';

import styles from './PaymentMethods.module.scss';

export const PaymentMethods = () => {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <div className={`${styles.methods} ${isDark ? styles.methods_dark : ''}`}>
            {PAYMENT_METHODS.map(method => (
                <PaymentMethod key={method.id} id={method.id} icon={method.icon} label={method.label} />
            ))}
        </div>
    );
};
