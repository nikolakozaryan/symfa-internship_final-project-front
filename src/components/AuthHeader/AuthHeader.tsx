import { AuthNavigation } from '../AuthNavigation/AuthNavigation';

import styles from './AuthHeader.module.scss';

export const AuthHeader = () => (
    <header className={styles.header}>
        <img className={styles.header__logo} src="./assets/logo.png" alt="App logo" />
        <h1 className={styles.header__title}>Corner Food</h1>
        <p className={styles.header__title_sub}>Delivery App</p>
        <AuthNavigation />
    </header>
);
