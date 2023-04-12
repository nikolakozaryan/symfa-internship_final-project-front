import { CartItems } from '../../components/Order/CartItems';
import { ConfirmButton } from '../../components/Order/ConfirmButton';
import { Header } from '../../components/Order/Header';
import { Promo } from '../../components/Order/Promo';
import { Total } from '../../components/Order/Total';

import styles from './Orders.module.scss';

export const Orders = () => (
    <section className={styles.default}>
        <Header />
        <CartItems />
        <Promo />
        <Total />
        <ConfirmButton />
    </section>
);
