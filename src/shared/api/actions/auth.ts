import type { AxiosPromise } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { GoogleSigninData, ReqSigninData, ResSigninData } from '../../../store/types/signIn';
import type { ReqSignupData } from '../../../store/types/signUp';
import { ENDPOINTS } from '../endpoints';
import { axiosInstance } from '../instance';

export const register = createAsyncThunk(
    'auth/signUp',
    (params: ReqSignupData): AxiosPromise<void> => axiosInstance.post(ENDPOINTS.AUTH.REGISTER, params),
);
export const login = createAsyncThunk(
    'auth/signIn',
    (params: ReqSigninData): AxiosPromise<ResSigninData> => axiosInstance.post(ENDPOINTS.AUTH.LOGIN, params),
);
export const googleAuth = createAsyncThunk(
    'auth/google',
    (params: GoogleSigninData): AxiosPromise<ResSigninData> => axiosInstance.post(ENDPOINTS.AUTH.GOOGLE, params),
);
export const refresh = createAsyncThunk(
    'auth/refresh',
    (): AxiosPromise<ResSigninData> => axiosInstance.patch(ENDPOINTS.AUTH.REFRESH),
);
export const forgot = createAsyncThunk(
    'auth/forgot',
    (params: ReqSigninData): AxiosPromise<void> => axiosInstance.patch(ENDPOINTS.AUTH.FORGOT, params),
);
