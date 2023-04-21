import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Auth/Header';

import styles from './styles.module.scss';

export const Auth = () => (
    <div className={styles.auth}>
        <Header />
        <Outlet />
    </div>
);
