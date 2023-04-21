import { createSlice } from '@reduxjs/toolkit';

import type { IThemeState } from '../types/storeState';

const initialState: IThemeState = {
    dark: !!JSON.parse(localStorage.getItem('darkTheme') || '0'),
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: state => {
            localStorage.setItem('darkTheme', JSON.stringify(Number(!state.dark)));

            return { dark: !state.dark };
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
