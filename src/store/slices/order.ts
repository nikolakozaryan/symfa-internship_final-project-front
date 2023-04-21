import { createSlice } from '@reduxjs/toolkit';

import type { IOrderState } from '../types/storeState';
import { getOrders } from '../../shared/api/actions';

const initialState: IOrderState = {
    orders: [],
    isLoading: false,
    errorMessage: '',
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        resetOrderState: () => initialState,
    },
    extraReducers: builder => {
        builder.addCase(getOrders.pending, state => {
            const isLoading = true;
            const errorMessage = '';

            return { ...state, isLoading, errorMessage };
        });
        builder.addCase(getOrders.fulfilled, (state, action) => {
            const orders = action.payload.data;
            const errorMessage = 'SUCCESS';
            const isLoading = false;

            return { ...state, isLoading, errorMessage, orders };
        });
        builder.addCase(getOrders.rejected, (state, data) => {
            const isLoading = false;
            const errorMessage = data.error.message as string;

            return { ...state, isLoading, errorMessage };
        });
    },
});

export const { resetOrderState } = orderSlice.actions;
