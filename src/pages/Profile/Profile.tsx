import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Profile/Header';

import styles from './styles.module.scss';

export const Profile = () => (
    <section className={styles.profile}>
        <Header />
        <div className={styles.container}>
            <Outlet />
        </div>
    </section>
);
