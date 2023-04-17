import { createSlice } from '@reduxjs/toolkit';

import type { IUserState } from './types';
import { getUser, toggleFav } from '../../shared/api/actions/user';

const initialState: IUserState = {
    id: '',
    email: '',
    username: '',
    avatar: '',
    favs: [],
    isLoading: false,
    errorMessage: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUserState: () => {
            localStorage.clear();

            return initialState;
        },
        resetError: state => {
            state.errorMessage = '';
        },
    },
    extraReducers: builder => {
        builder.addCase(getUser.pending, state => {
            state.errorMessage = '';
        });
        builder.addCase(getUser.fulfilled, (state, data) => {
            const {
                data: { id, avatar, email, favs, username },
            } = data.payload;

            state.id = id;
            state.avatar = avatar;
            state.email = email;
            state.favs = favs;
            state.username = username;

            state.errorMessage = 'SUCCESS';
        });
        builder.addCase(getUser.rejected, (state, data) => {
            state.errorMessage = data.error.message as string;
        });

        builder.addCase(toggleFav.pending, state => {
            state.errorMessage = '';
        });
        builder.addCase(toggleFav.fulfilled, (state, data) => {
            const { data: dishId } = data.payload;

            const isFav = state.favs.includes(dishId);

            state.favs = isFav ? state.favs.filter(id => id !== dishId) : state.favs.concat(dishId);
            state.errorMessage = 'SUCCESS';
        });
        builder.addCase(toggleFav.rejected, (state, data) => {
            state.errorMessage = data.error.message as string;
        });
    },
});

export const { resetUserState, resetError } = userSlice.actions;
