import { createSlice } from '@reduxjs/toolkit';

import type { IAuthState } from '../types/storeState';
import { forgot, googleAuth, login, refresh, register } from '../../shared/api/actions';

const initialState: IAuthState = {
    at: localStorage.getItem('at') || '',
    rt: localStorage.getItem('rt') || '',
    errorMessage: '',
    isLoading: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetAuthState: () => {
            localStorage.removeItem('at');
            localStorage.removeItem('rt');

            return {
                ...initialState,
                at: '',
                rt: '',
            };
        },
        resetError: state => {
            const errorMessage = '';

            return { ...state, errorMessage };
        },
    },
    extraReducers: builder => {
        builder.addCase(register.pending, state => {
            const errorMessage = '';
            const isLoading = true;

            return { ...state, errorMessage, isLoading };
        });
        builder.addCase(register.fulfilled, state => {
            const errorMessage = 'SUCCESS';

            return { ...state, errorMessage };
        });
        builder.addCase(register.rejected, (state, data) => {
            const errorMessage = data.error.message as string;
            const isLoading = false;

            return { ...state, errorMessage, isLoading };
        });

        builder.addCase(login.pending, state => {
            const errorMessage = '';
            const isLoading = true;

            return { ...state, errorMessage, isLoading };
        });
        builder.addCase(login.fulfilled, (state, data) => {
            const { accessToken, refreshToken } = data.payload.data;

            localStorage.setItem('at', accessToken);
            localStorage.setItem('rt', refreshToken);

            const at = accessToken;
            const rt = refreshToken;
            const errorMessage = 'SUCCESS';
            const isLoading = false;

            return { ...state, errorMessage, isLoading, at, rt };
        });
        builder.addCase(login.rejected, (state, data) => {
            const errorMessage = data.error.message as string;
            const isLoading = false;

            return { ...state, errorMessage, isLoading };
        });

        builder.addCase(googleAuth.pending, state => {
            const errorMessage = '';
            const isLoading = true;

            return { ...state, errorMessage, isLoading };
        });
        builder.addCase(googleAuth.fulfilled, (state, data) => {
            const { accessToken, refreshToken } = data.payload.data;

            localStorage.setItem('at', accessToken);
            localStorage.setItem('rt', refreshToken);

            const at = accessToken;
            const rt = refreshToken;
            const errorMessage = 'SUCCESS';
            const isLoading = false;

            return { ...state, errorMessage, isLoading, at, rt };
        });
        builder.addCase(googleAuth.rejected, (state, data) => {
            const errorMessage = data.error.message as string;
            const isLoading = false;

            return { ...state, errorMessage, isLoading };
        });

        builder.addCase(refresh.fulfilled, (state, data) => {
            const { accessToken, refreshToken } = data.payload.data;

            localStorage.setItem('at', accessToken);
            localStorage.setItem('rt', refreshToken);

            const at = accessToken;
            const rt = refreshToken;
            const errorMessage = 'SUCCESS';
            const isLoading = false;

            return { ...state, errorMessage, isLoading, at, rt };
        });
        builder.addCase(refresh.rejected, (state, data) => {
            localStorage.clear();
            const errorMessage = data.error.message as string;
            const isLoading = false;

            return { ...state, errorMessage, isLoading };
        });

        builder.addCase(forgot.pending, state => {
            const errorMessage = '';
            const isLoading = true;

            return { ...state, errorMessage, isLoading };
        });
        builder.addCase(forgot.fulfilled, state => {
            const errorMessage = 'SUCCESS';

            return { ...state, errorMessage };
        });
        builder.addCase(forgot.rejected, (state, data) => {
            const errorMessage = data.error.message as string;
            const isLoading = false;

            return { ...state, errorMessage, isLoading };
        });
    },
});

export const { resetAuthState, resetError } = authSlice.actions;
