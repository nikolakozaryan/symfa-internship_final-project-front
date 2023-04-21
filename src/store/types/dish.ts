import type { DishType, TasteType } from '../../shared/constants/dishes';

export type Dish = {
    id: string;
    product: string;
    productName: string;
    description: string;
    price: number;
    prepareTime: number;
    rating: number;
    image: string;
};

export type DishesResponse = {
    page: number;
    pages: number;
    amount: number;
    dishes: Dish[];
};

interface IParams {
    search?: string;
    page?: number;
}

export interface ISearchAllParams extends IParams {
    type: DishType;
}

export interface ISearchFavParams extends IParams {
    taste: TasteType;
}

export type CartDish = {
    dish: Dish;
    amount: number;
};
