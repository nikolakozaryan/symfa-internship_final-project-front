import { Outlet } from 'react-router-dom';

import { AuthHeader } from '../../components/AuthHeader';

import styles from './Auth.module.scss';

export const Auth = () => (
    <div className={styles.auth}>
        <AuthHeader />
        <Outlet />
    </div>
);
