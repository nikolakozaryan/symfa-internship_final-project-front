/* eslint-disable implicit-arrow-linebreak */
import type { AxiosPromise } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { UserData } from '../../../store/types/user';
import { ENDPOINTS } from '../endpoints';
import { axiosInstance } from '../instance';

export const getUser = createAsyncThunk(
    'user/getUser',
    (): AxiosPromise<UserData> => axiosInstance.get(ENDPOINTS.USER),
);
export const toggleFav = createAsyncThunk(
    'user/addFav',
    (params: { dishId: string }): AxiosPromise<string> => axiosInstance.patch(ENDPOINTS.USER, null, { params }),
);
