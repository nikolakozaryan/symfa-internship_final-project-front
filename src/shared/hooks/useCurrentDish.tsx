import type { Dish } from '../../store/types/dish';
import { useAppSelector } from '../../store/selectors/appSelector';

export const useCurrentDish = (dishId: string): Dish => {
    let currentDish: Dish;

    const dishes = useAppSelector(state => state.menu.dishes);
    const favDishes = useAppSelector(state => state.fav.dishes);
    const isInMenu = dishes.some(dish => dish.id === dishId);
    const isInFav = favDishes.some(dish => dish.id === dishId);

    if (isInMenu) {
        currentDish = dishes.find(dish => dish.id === dishId) as Dish;
    } else if (isInFav) {
        currentDish = favDishes.find(dish => dish.id === dishId) as Dish;
    } else {
        currentDish = JSON.parse(localStorage.getItem('cur') as string) as Dish;
    }

    localStorage.setItem('cur', JSON.stringify(currentDish));

    return currentDish;
};
