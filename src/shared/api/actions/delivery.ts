import type { AxiosPromise } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { IDeliveryResponse } from '../../../store/types/delivery';
import { ENDPOINTS } from '../endpoints';
import { axiosInstance } from '../instance';

export const getDeliveries = createAsyncThunk(
    'delivery/getDeliveries',
    (): AxiosPromise<IDeliveryResponse[]> => axiosInstance.get(ENDPOINTS.DELIVERY),
);
