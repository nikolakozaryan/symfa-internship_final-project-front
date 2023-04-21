import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IDeliveryData, IDeliveryResponse } from '../types/delivery';
import type { IDeliveryState } from '../types/storeState';
import { getDeliveries } from '../../shared/api/actions';

const initialState: IDeliveryState = {
    deliveries: [],
    isLoading: false,
    errorMessage: '',
};

export const deliverySlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {
        addDelivery(state, action: PayloadAction<IDeliveryResponse>) {
            const delivery = action.payload;
            const formatedDelivery: IDeliveryData = { ...delivery, deliveryDate: new Date(delivery.deliveryDate) };
            const deliveries = [formatedDelivery, ...state.deliveries].sort(
                (a, b) => a.deliveryDate.getTime() - b.deliveryDate.getTime(),
            );

            return { ...state, deliveries };
        },
        resetDeliveryState: () => initialState,
    },
    extraReducers: builder => {
        builder.addCase(getDeliveries.pending, state => {
            const errorMessage = '';
            const isLoading = true;

            return { ...state, errorMessage, isLoading };
        });
        builder.addCase(getDeliveries.fulfilled, (state, action) => {
            const deliveries = action.payload.data.map(item => ({
                ...item,
                deliveryDate: new Date(item.deliveryDate),
            }));
            const errorMessage = 'SUCCESS';
            const isLoading = false;

            return { ...state, errorMessage, isLoading, deliveries };
        });
        builder.addCase(getDeliveries.rejected, (state, data) => {
            const errorMessage = data.error.message as string;
            const isLoading = false;

            return { ...state, errorMessage, isLoading };
        });
    },
});

export const { addDelivery, resetDeliveryState } = deliverySlice.actions;
