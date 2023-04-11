import { useNavigate } from 'react-router-dom';

import styles from './OrderHeader.module.scss';

export const OrderHeader = () => {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <h2 className={styles.header__title}>My Order</h2>
            <button
                className={styles.header__button}
                type="button"
                onClick={() => {
                    navigate(-1);
                }}
            />
        </header>
    );
};
