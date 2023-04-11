import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { DishType } from '../../shared/constants/dishes';
import type { IMenuState } from './types';
import { getDishes } from '../../shared/api/actions/menu';

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
            state.page = 1;
            state.dishes = [];
            state.type = data.payload;
        },
        setSearch: (state, data: PayloadAction<string>) => {
            state.page = 1;
            state.dishes = [];
            state.search = data.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(getDishes.pending, state => {
            state.isLoading = true;
            state.errorMessage = '';
        });
        builder.addCase(getDishes.fulfilled, (state, data) => {
            const { data: responseData } = data.payload;

            state.dishes = state.dishes.concat(responseData.dishes);
            state.page = responseData.page;
            state.pages = responseData.pages;

            state.errorMessage = 'SUCCESS';
            state.isLoading = false;
        });
        builder.addCase(getDishes.rejected, (state, data) => {
            state.isLoading = false;
            state.errorMessage = data.error.message as string;
        });
    },
});

export const { setType, setSearch } = menuSlice.actions;
