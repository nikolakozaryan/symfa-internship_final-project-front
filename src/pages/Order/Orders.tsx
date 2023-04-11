import { CartItems } from '../../components/CartItems';
import { ConfirmButton } from '../../components/ConfirmButton';
import { OrderHeader } from '../../components/OrderHeader';
import { Promo } from '../../components/Promo';
import { Total } from '../../components/Total';

import styles from './Orders.module.scss';

export const Orders = () => (
    <section className={styles.default}>
        <OrderHeader />
        <CartItems />
        <Promo />
        <Total />
        <ConfirmButton />
    </section>
);
