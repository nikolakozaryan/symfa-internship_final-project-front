/* eslint-disable implicit-arrow-linebreak */
import type { AxiosPromise } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { GoogleSigninData, ReqSigninData, ResSigninData } from '../../../store/types/signIn';
import type { ReqSignupData } from '../../../store/types/signUp';
import { ENDPOINTS } from '../endpoints';
import { axiosInstance } from '../instance';

const signUp = (params: ReqSignupData): AxiosPromise<void> => axiosInstance.post(ENDPOINTS.AUTH.REGISTER, params);
const signIn = (params: ReqSigninData): AxiosPromise<ResSigninData> => axiosInstance.post(ENDPOINTS.AUTH.LOGIN, params);
const forgotPassword = (params: ReqSigninData): AxiosPromise<void> =>
    axiosInstance.patch(ENDPOINTS.AUTH.FORGOT, params);
const googleLogin = (params: GoogleSigninData): AxiosPromise<ResSigninData> =>
    axiosInstance.post(ENDPOINTS.AUTH.GOOGLE, params);

const refreshTokens = (): AxiosPromise<ResSigninData> => axiosInstance.patch(ENDPOINTS.AUTH.REFRESH);

export const register = createAsyncThunk('auth/signUp', signUp);
export const login = createAsyncThunk('auth/signIn', signIn);
export const googleAuth = createAsyncThunk('auth/google', googleLogin);
export const refresh = createAsyncThunk('auth/refresh', refreshTokens);
export const forgot = createAsyncThunk('auth/forgot', forgotPassword);
