import type { DishType, TasteType } from '../../shared/constants/dishes';
import type { IDeliveryData } from './delivery';
import type { CartDish, Dish } from './dish';
import type { OrdersResponse } from './order';

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
    secret: string;
}

interface IDishesState extends IState {
    search: string;
    page: number;
    pages: number;

    dishes: Dish[];
}

export interface IDeliveryState extends IState {
    deliveries: IDeliveryData[];
}

export interface IMenuState extends IDishesState {
    type: DishType;
}

export interface IFavsState extends IDishesState {
    taste: TasteType;
}

export interface IThemeState {
    dark: boolean;
}

export interface IOrderState extends IState {
    orders: OrdersResponse[];
}
