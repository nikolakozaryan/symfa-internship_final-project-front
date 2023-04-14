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

export const createOrder = (data: CreateOrderDto): AxiosPromise<void> => axiosInstance.post(ENDPOINTS.ORDER, data);
export const getSecret = (data: PaymentType[]): AxiosPromise<string> => axiosInstance.post(ENDPOINTS.PAYMENTS, data);

export const sendCheckout = createAsyncThunk('user/addFav', getSecret);
