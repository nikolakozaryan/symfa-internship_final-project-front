import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import type { Dish } from '../../store/types/dish';
import { useAppSelector } from '../../store/selectors/appSelector';
import { AddToCart } from '../AddToCart';
import { FavButton } from '../FavButton';

import styles from './DishCard.module.scss';

export const DishCard: FC<Dish> = dish => {
    const isDark = useAppSelector(state => state.theme.dark);
    const { id, image, price, product, productName } = dish;

    return (
        <NavLink to={`../${id}`} className={`${styles.card} ${isDark ? styles.card_dark : ''}`}>
            <div className={styles.card__image__container}>
                <img className={styles.card__image} src={image} alt="iamge" />
                <FavButton id={id} />
            </div>
            <div className={styles.card__title}>
                <h3 className={styles.card__name} title={product}>
                    {product}
                </h3>
                <h4 className={styles.card__name_full}>{productName}</h4>
            </div>
            <span className={styles.card__price}>
                <span className={styles.card__price_currency}>$</span>
                {price.toFixed(2)}
            </span>
            <AddToCart dish={dish} />
        </NavLink>
    );
};
