import { createSlice } from '@reduxjs/toolkit';

import type { State } from './types';
import { login, refresh, register } from '../../shared/api/actions';

const initialState: State = {
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
            localStorage.clear();

            return initialState;
        },
    },
    extraReducers: builder => {
        builder.addCase(register.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(register.fulfilled, state => {
            state.errorMessage = 'SUCCESS';
        });
        builder.addCase(register.rejected, (state, data) => {
            state.errorMessage = data.error.message as string;
            state.isLoading = false;
        });

        builder.addCase(login.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, data) => {
            const { accessToken, refreshToken } = data.payload.data;

            localStorage.setItem('at', accessToken);
            localStorage.setItem('rt', refreshToken);

            state.at = accessToken;
            state.rt = refreshToken;
            state.errorMessage = 'SUCCESS';

            state.isLoading = false;
        });
        builder.addCase(login.rejected, (state, data) => {
            state.errorMessage = data.error.message as string;
            state.isLoading = false;
        });

        builder.addCase(refresh.fulfilled, (state, data) => {
            const { accessToken, refreshToken } = data.payload.data;

            localStorage.setItem('at', accessToken);
            localStorage.setItem('rt', refreshToken);

            state.at = accessToken;
            state.rt = refreshToken;
            state.errorMessage = 'SUCCESS';

            state.isLoading = false;
        });
        builder.addCase(refresh.rejected, (state, data) => {
            state.errorMessage = data.error.message as string;
            localStorage.clear();
            state.isLoading = false;
        });
    },
});

export const { resetAuthState } = authSlice.actions;