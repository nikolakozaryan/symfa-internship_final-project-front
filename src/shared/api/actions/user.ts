/* eslint-disable implicit-arrow-linebreak */
import type { AxiosPromise } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { UserData } from '../../../store/types/user.type';
import { ENDPOINTS } from '../endpoints';
import { axiosInstance } from '../instance';

const getUserData = (): AxiosPromise<UserData> => axiosInstance.get(ENDPOINTS.USER);
const toggleRemoteFav = (params: { dishId: string }): AxiosPromise<string> =>
    axiosInstance.patch(ENDPOINTS.USER, null, { params });

export const getUser = createAsyncThunk('user/getUser', getUserData);
export const toggleFav = createAsyncThunk('user/addFav', toggleRemoteFav);
