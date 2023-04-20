import { createSlice } from '@reduxjs/toolkit';

import type { IOrderState } from './types';
import { getOrders } from '../../shared/api/actions';

const initialState: IOrderState = {
    orders: [],
    isLoading: false,
    errorMessage: '',
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getOrders.pending, state => {
            state.isLoading = true;
            state.errorMessage = '';
        });
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload.data;

            state.errorMessage = 'SUCCESS';
            state.isLoading = false;
        });
        builder.addCase(getOrders.rejected, (state, data) => {
            state.isLoading = false;
            state.errorMessage = data.error.message as string;
        });
    },
});
