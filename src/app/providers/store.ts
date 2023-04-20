import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { authSlice } from '../../store/slices/auth.slice';
import { cartSlice } from '../../store/slices/cart.slice';
import { deliverySlice } from '../../store/slices/delivery.slice';
import { favSlice } from '../../store/slices/fav.slice';
import { menuSlice } from '../../store/slices/menu.slice';
import { orderSlice } from '../../store/slices/order.slice';
import { themeSlice } from '../../store/slices/theme.slice';
import { userSlice } from '../../store/slices/user.slice';

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
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
