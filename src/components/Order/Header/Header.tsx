import { useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
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
