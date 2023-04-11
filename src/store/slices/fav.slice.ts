import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { TasteType } from '../../shared/constants/dishes';
import type { IFavsState } from './types';
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
            state.page = 1;
            state.dishes = [];
            state.taste = data.payload;
        },

        setFavSearch: (state, data: PayloadAction<string>) => {
            state.page = 1;
            state.dishes = [];
            state.search = data.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(getFavs.pending, state => {
            state.isLoading = true;
            state.errorMessage = '';
        });
        builder.addCase(getFavs.fulfilled, (state, data) => {
            const { data: responseData } = data.payload;

            state.dishes = state.dishes.concat(responseData.dishes);
            state.page = responseData.page;
            state.pages = responseData.pages;

            state.errorMessage = 'SUCCESS';
            state.isLoading = false;
        });
        builder.addCase(getFavs.rejected, (state, data) => {
            state.isLoading = false;
            state.errorMessage = data.error.message as string;
        });
    },
});

export const { setFavTaste, setFavSearch } = favSlice.actions;
