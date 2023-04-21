import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { CartDish } from '../types/dish';
import type { ICartState } from '../types/storeState';

type ChangeAmount = {
    id: string;
    newAmount: number;
};

const initialState: ICartState = {
    secret: '',
    dishes: [],
    isLoading: false,
    errorMessage: '',
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setSecret: (state, action: PayloadAction<string>) => {
            const secret = action.payload;

            return { ...state, secret };
        },
        resetSecret: state => {
            const secret = '';

            return { ...state, secret };
        },
        addToCart: (state, action: PayloadAction<CartDish>) => {
            const dishes = state.dishes.concat(action.payload);

            return { ...state, dishes };
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const dishes = state.dishes.filter(cartDish => cartDish.dish.id !== action.payload);

            return { ...state, dishes };
        },
        changeAmount: (state, action: PayloadAction<ChangeAmount>) => {
            const dishes = state.dishes
                .map(cartDish => {
                    const { dish } = cartDish;
                    const { id, newAmount } = action.payload;

                    if (dish.id === id) {
                        return { ...cartDish, amount: newAmount };
                    }

                    return cartDish;
                })
                .filter(cartDish => cartDish.amount > 0);

            return { ...state, dishes };
        },
        resetCartState: () => initialState,
    },
});

export const { addToCart, removeFromCart, resetCartState, changeAmount, setSecret, resetSecret } = cartSlice.actions;
