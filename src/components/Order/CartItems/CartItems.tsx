import { useAppSelector } from '../../../store/selectors/appSelector';
import { CartItem } from '../CartItem/CartItem';

import styles from './CartItems.module.scss';

export const CartItems = () => {
    const dishes = useAppSelector(state => state.cart.dishes);

    return (
        <div className={styles.items__container}>
            <div className={styles.items}>
                {dishes.map(cartDish => (
                    <CartItem key={cartDish.dish.id} cartDish={cartDish} />
                ))}
            </div>
        </div>
    );
};
