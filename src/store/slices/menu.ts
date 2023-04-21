import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { DishType } from '../../shared/constants/dishes';
import type { Dish } from '../types/dish';
import type { IMenuState } from '../types/storeState';
import { getDishes } from '../../shared/api/actions';

const initialState: IMenuState = {
    search: '',
    page: 1,
    pages: 1,
    type: 'burger',
    dishes: [],
    isLoading: false,
    errorMessage: '',
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setType: (state, data: PayloadAction<DishType>) => {
            const page = 1;
            const dishes: Dish[] = [];
            const type = data.payload;

            return { ...state, page, dishes, type };
        },
        setSearch: (state, data: PayloadAction<string>) => {
            const page = 1;
            const dishes: Dish[] = [];
            const search = data.payload;

            return { ...state, page, dishes, search };
        },
        resetMenuState: () => initialState,
    },
    extraReducers: builder => {
        builder.addCase(getDishes.pending, state => {
            const isLoading = true;
            const errorMessage = '';

            return { ...state, isLoading, errorMessage };
        });
        builder.addCase(getDishes.fulfilled, (state, data) => {
            const { data: responseData } = data.payload;

            const dishes = state.dishes.concat(responseData.dishes);
            const { page, pages } = responseData;
            const errorMessage = 'SUCCESS';
            const isLoading = false;

            return { ...state, isLoading, errorMessage, dishes, page, pages };
        });
        builder.addCase(getDishes.rejected, (state, data) => {
            const isLoading = false;
            const errorMessage = data.error.message as string;

            return { ...state, isLoading, errorMessage };
        });
    },
});

export const { setType, setSearch, resetMenuState } = menuSlice.actions;
