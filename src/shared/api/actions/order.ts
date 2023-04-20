/* eslint-disable implicit-arrow-linebreak */
import type { AxiosPromise } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ENDPOINTS } from '../endpoints';
import { axiosInstance } from '../instance';

export type PaymentType = {
    id: string;
    amount: number;
};

type CreateOrderDto = {
    dishIds: string[];
    totalPrice: number;
    createdAt: number;
};

type OrderDish = {
    id: string;
    productName: string;
};

export type OrdersResponse = {
    id: string;
    totalPrice: number;
    createdAt: string;
    dishes: OrderDish[];
};

export const getUserOrders = (): AxiosPromise<OrdersResponse[]> => axiosInstance.get(ENDPOINTS.ORDER);
export const createOrder = (data: CreateOrderDto): AxiosPromise<void> => axiosInstance.post(ENDPOINTS.ORDER, data);
export const getSecret = (data: PaymentType[]): AxiosPromise<string> => axiosInstance.post(ENDPOINTS.PAYMENTS, data);

export const sendCheckout = createAsyncThunk('order/getSecret', getSecret);
export const getOrders = createAsyncThunk('order/getOrders', getUserOrders);
