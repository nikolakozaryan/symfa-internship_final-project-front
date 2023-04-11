import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { CartDish, ICartState } from './types';

type ChangeAmount = {
    id: string;
    newAmount: number;
};

const initialState: ICartState = {
    dishes: [],
    isLoading: false,
    errorMessage: '',
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartDish>) => {
            state.dishes = state.dishes.concat(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.dishes = state.dishes.filter(cartDish => cartDish.dish.id !== action.payload);
        },
        changeAmount: (state, action: PayloadAction<ChangeAmount>) => {
            state.dishes = state.dishes
                .map(cartDish => {
                    const { dish } = cartDish;
                    const { id, newAmount } = action.payload;

                    if (dish.id === id) {
                        return { ...cartDish, amount: newAmount };
                    }

                    return cartDish;
                })
                .filter(cartDish => cartDish.amount > 0);
        },
        resetCart: () => initialState,
    },
});

export const { addToCart, removeFromCart, resetCart, changeAmount } = cartSlice.actions;
