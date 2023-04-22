/* eslint-disable implicit-arrow-linebreak */
import type { PaymentMethod } from '@stripe/stripe-js';
import type { AxiosPromise } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { CreateOrderDto, OrdersResponse, PaymentType } from '../../../store/types/order';
import type { CreatePaymentMethodDto } from '../../../store/types/payments';
import { ENDPOINTS } from '../endpoints';
import { axiosInstance } from '../instance';

export const createOrder = (data: CreateOrderDto): AxiosPromise<void> => axiosInstance.post(ENDPOINTS.ORDER, data);
export const getSecret = (data: PaymentType[]): AxiosPromise<string> =>
    axiosInstance.post(ENDPOINTS.PAYMENTS.DEFAULT, data);
export const cancelPayment = (data: { paymentId: string }): AxiosPromise =>
    axiosInstance.delete(ENDPOINTS.PAYMENTS.DEFAULT, { data });
export const createPaymentMethod = (data: CreatePaymentMethodDto): AxiosPromise<PaymentMethod> =>
    axiosInstance.post(ENDPOINTS.PAYMENTS.METHOD, data);

export const sendCheckout = createAsyncThunk(
    'order/getSecret',
    (data: PaymentType[]): AxiosPromise<string> => axiosInstance.post(ENDPOINTS.PAYMENTS.DEFAULT, data),
);
export const getOrders = createAsyncThunk(
    'order/getOrders',
    (): AxiosPromise<OrdersResponse[]> => axiosInstance.get(ENDPOINTS.ORDER),
);
