import { createSlice } from '@reduxjs/toolkit';

import type { IThemeState } from './types';

const initialState: IThemeState = {
    dark: !!JSON.parse(localStorage.getItem('darkTheme') || '0'),
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: state => {
            state.dark = !state.dark;
            localStorage.setItem('darkTheme', JSON.stringify(Number(state.dark)));
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
