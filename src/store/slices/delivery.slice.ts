import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IDeliveryData, IDeliveryResponse } from '../types/delivery';
import type { IDeliveryState } from './types';
import { getDeliveries } from '../../shared/api/actions/delivery';

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
            const newDeliveries = [formatedDelivery, ...state.deliveries].sort(
                (a, b) => a.deliveryDate.getTime() - b.deliveryDate.getTime(),
            );

            state.deliveries = newDeliveries;
        },
    },
    extraReducers: builder => {
        builder.addCase(getDeliveries.pending, state => {
            state.errorMessage = '';
            state.isLoading = true;
        });
        builder.addCase(getDeliveries.fulfilled, (state, action) => {
            state.deliveries = action.payload.data.map(item => ({
                ...item,
                deliveryDate: new Date(item.deliveryDate),
            }));
            state.errorMessage = 'SUCCESS';
            state.isLoading = false;
        });
        builder.addCase(getDeliveries.rejected, (state, data) => {
            state.errorMessage = data.error.message as string;
            state.isLoading = false;
        });
    },
});

export const { addDelivery } = deliverySlice.actions;
