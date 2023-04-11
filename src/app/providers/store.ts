import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { authSlice } from '../../store/slices/auth.slice';
import { favSlice } from '../../store/slices/fav.slice';
import { menuSlice } from '../../store/slices/menu.slice';
import { userSlice } from '../../store/slices/user.slice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        menu: menuSlice.reducer,
        fav: favSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
