import { DEFAULT_CARD } from '../../shared/constants/defaultCard';
import { useAppSelector } from '../../store/selectors/appSelector';
import { parseCardNumber } from '../../utils/parseCardNumber';

import styles from './styles.module.scss';

export const CreditCard = () => {
    const username = useAppSelector(state => state.user.username);

    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <img src="/assets/Amazon_logo.png" alt="amazon logo" />
            </div>
            <div className={styles.card__name}>{username}</div>
            <div className={styles.card__info}>
                <span className={styles.card__info_number}>{parseCardNumber(DEFAULT_CARD.number)}</span>
                <p className={styles.card__info__creds}>
                    <span className={styles.card__info__creds_amount}>$3.464.98</span>
                    <img src="/assets/mastercard.png" alt="mastercard logo" />
                </p>
            </div>
        </div>
    );
};
