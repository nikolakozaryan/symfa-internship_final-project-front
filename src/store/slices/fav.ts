import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { TasteType } from '../../shared/constants/dishes';
import type { Dish } from '../types/dish';
import type { IFavsState } from '../types/storeState';
import { getFavs } from '../../shared/api/actions/menu';

const initialState: IFavsState = {
    search: '',
    page: 1,
    pages: 1,
    taste: 'sweet',
    dishes: [],
    isLoading: false,
    errorMessage: '',
};

export const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        setFavTaste: (state, data: PayloadAction<TasteType>) => {
            const page = 1;
            const dishes: Dish[] = [];
            const taste = data.payload;

            return { ...state, page, dishes, taste };
        },

        setFavSearch: (state, data: PayloadAction<string>) => {
            const page = 1;
            const dishes: Dish[] = [];
            const search = data.payload;

            return { ...state, page, dishes, search };
        },
        resetFavState: () => initialState,
    },
    extraReducers: builder => {
        builder.addCase(getFavs.pending, state => {
            const isLoading = true;
            const errorMessage = '';

            return { ...state, isLoading, errorMessage };
        });
        builder.addCase(getFavs.fulfilled, (state, data) => {
            const { data: responseData } = data.payload;

            const dishes = state.dishes.concat(responseData.dishes);
            const { page, pages } = responseData;

            const errorMessage = 'SUCCESS';
            const isLoading = false;

            return { ...state, isLoading, errorMessage, dishes, page, pages };
        });
        builder.addCase(getFavs.rejected, (state, data) => {
            const isLoading = false;
            const errorMessage = data.error.message as string;

            return { ...state, isLoading, errorMessage };
        });
    },
});

export const { setFavTaste, setFavSearch, resetFavState } = favSlice.actions;
