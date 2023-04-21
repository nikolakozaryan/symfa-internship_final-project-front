import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { authSlice } from '../../store/slices/auth';
import { cartSlice } from '../../store/slices/cart';
import { deliverySlice } from '../../store/slices/delivery';
import { favSlice } from '../../store/slices/fav';
import { menuSlice } from '../../store/slices/menu';
import { orderSlice } from '../../store/slices/order';
import { themeSlice } from '../../store/slices/theme';
import { userSlice } from '../../store/slices/user';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        menu: menuSlice.reducer,
        fav: favSlice.reducer,
        cart: cartSlice.reducer,
        theme: themeSlice.reducer,
        delivery: deliverySlice.reducer,
        order: orderSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
