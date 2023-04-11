import type { DishType, TasteType } from '../../shared/constants/dishes';
import type { Dish } from '../types/dish.types';

export interface IState {
    errorMessage: string;
    isLoading: boolean;
}

export interface IAuthState extends IState {
    at: string;
    rt: string;
}

export interface IUserState extends IState {
    id: string;
    email: string;
    username: string;
    avatar: string;
    favs: string[];
}

export interface ICartState extends IState {
    dishes: CartDish[];
}

export type CartDish = {
    dish: Dish;
    amount: number;
};

interface IDishesState extends IState {
    search: string;
    page: number;
    pages: number;

    dishes: Dish[];
}

export interface IMenuState extends IDishesState {
    type: DishType;
}

export interface IFavsState extends IDishesState {
    taste: TasteType;
}
