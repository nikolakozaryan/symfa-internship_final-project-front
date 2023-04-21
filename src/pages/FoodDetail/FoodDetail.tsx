import { useLocation, useNavigate } from 'react-router-dom';

import type { Dish } from '../../store/types/dish';
import { About } from '../../components/Detailed/About';
import { Cart } from '../../components/Detailed/Cart';
import { Details } from '../../components/Detailed/Details';
import { Header } from '../../components/Detailed/Header';
import { FavButton } from '../../components/FavButton';
import { useCurrentDish } from '../../shared/hooks/useCurrentDish';
import { useAppSelector } from '../../store/selectors/appSelector';

import styles from './styles.module.scss';

export const FoodDetail = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const dishId = pathname.split('/').at(-1) as string;
    const currentDish = useCurrentDish(dishId);
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <div className={styles.detailed}>
            <div className={styles.detailed__image__container}>
                <img className={styles.detailed__image} src={currentDish?.image} alt={currentDish?.productName} />
                <FavButton large id={dishId} />
                <button
                    className={styles.back}
                    type="button"
                    onClick={() => {
                        navigate(-1);
                    }}
                />
            </div>

            <div className={`${styles.detailed__info} ${isDark ? styles.detailed__info_dark : ''}`}>
                <Header currentDish={currentDish} />
                <Details time={currentDish?.prepareTime as number} rating={currentDish?.rating as number} />
                <About description={currentDish?.description as string} />
                <Cart dish={currentDish as Dish} />
            </div>
        </div>
    );
};
