import axios, { AxiosError } from 'axios';

import { API_URL } from '../constants/baseURL';
import { ENDPOINTS } from './endpoints';

export const axiosInstance = axios.create({ baseURL: API_URL });

type ServerErrorResponse = {
    message: string;
    statusCode: number;
};

const urlsSkipAuth = [ENDPOINTS.AUTH.LOGIN, ENDPOINTS.AUTH.REFRESH, ENDPOINTS.AUTH.REGISTER];

axiosInstance.interceptors.request.use(async conf => {
    const confCopy = { ...conf };
    const accessToken = localStorage.getItem('at');
    const refreshToken = localStorage.getItem('rt');

    if (refreshToken && conf.url === ENDPOINTS.AUTH.REFRESH) {
        confCopy.headers.Authorization = `Bearer ${refreshToken}`;

        return confCopy;
    }

    if (conf.url && urlsSkipAuth.includes(conf.url)) {
        return conf;
    }

    if (accessToken) {
        confCopy.headers.Authorization = `Bearer ${accessToken}`;
    }

    return confCopy;
});

axiosInstance.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
        const { message, statusCode } = error.response?.data as ServerErrorResponse;

        throw new AxiosError(message, String(statusCode));
    },
);
