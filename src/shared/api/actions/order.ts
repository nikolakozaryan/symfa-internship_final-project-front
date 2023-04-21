import type { AxiosPromise } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { CreateOrderDto, OrdersResponse, PaymentType } from '../../../store/types/order';
import { ENDPOINTS } from '../endpoints';
import { axiosInstance } from '../instance';

export const createOrder = (data: CreateOrderDto): AxiosPromise<void> => axiosInstance.post(ENDPOINTS.ORDER, data);
export const getSecret = (data: PaymentType[]): AxiosPromise<string> => axiosInstance.post(ENDPOINTS.PAYMENTS, data);

export const sendCheckout = createAsyncThunk(
    'order/getSecret',
    (data: PaymentType[]): AxiosPromise<string> => axiosInstance.post(ENDPOINTS.PAYMENTS, data),
);
export const getOrders = createAsyncThunk(
    'order/getOrders',
    (): AxiosPromise<OrdersResponse[]> => axiosInstance.get(ENDPOINTS.ORDER),
);
