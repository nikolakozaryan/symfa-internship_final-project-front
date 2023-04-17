import { useAppSelector } from '../../../store/selectors/appSelector';

import styles from './Promo.module.scss';

export const Promo = () => {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <div className={`${styles.promo} ${isDark ? styles.promo_dark : ''}`}>
            <img className={styles.promo__image} src="/assets/icons/promo_code.svg" alt="promo icon" />
            <input className={styles.promo__input} type="text" placeholder="Promo code . . ." maxLength={10} />
            <button className={styles.promo__button} type="button">
                apply
            </button>
        </div>
    );
};
