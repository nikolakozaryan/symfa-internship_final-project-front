import { createSlice } from '@reduxjs/toolkit';

import type { IUserState } from '../types/storeState';
import { getUser, toggleFav } from '../../shared/api/actions';

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
        resetUserState: () => initialState,
        resetError: state => ({ ...state, errorMessage: '' }),
    },
    extraReducers: builder => {
        builder.addCase(getUser.pending, state => ({ ...state, errorMessage: '' }));
        builder.addCase(getUser.fulfilled, (state, data) => {
            const {
                data: { id, avatar, email, favs, username },
            } = data.payload;
            const errorMessage = 'SUCCESS';

            return { ...state, id, avatar, email, favs, username, errorMessage };
        });
        builder.addCase(getUser.rejected, (state, data) => ({
            ...state,
            errorMessage: data.error.message as string,
        }));

        builder.addCase(toggleFav.pending, state => ({ ...state, errorMessage: '' }));
        builder.addCase(toggleFav.fulfilled, (state, data) => {
            const { data: dishId } = data.payload;

            const isFav = state.favs.includes(dishId);
            const favs = isFav ? state.favs.filter(id => id !== dishId) : state.favs.concat(dishId);
            const errorMessage = 'SUCCESS';

            return { ...state, favs, errorMessage };
        });
        builder.addCase(toggleFav.rejected, (state, data) => ({
            ...state,
            errorMessage: data.error.message as string,
        }));
    },
});

export const { resetUserState, resetError } = userSlice.actions;
