import styles from './Promo.module.scss';

export const Promo = () => (
    <div className={styles.promo}>
        <img className={styles.promo__image} src="/assets/icons/promo_code.svg" alt="promo icon" />
        <input className={styles.promo__input} type="text" placeholder="Promo code . . ." />
        <button className={styles.promo__button} type="button">
            apply
        </button>
    </div>
);
