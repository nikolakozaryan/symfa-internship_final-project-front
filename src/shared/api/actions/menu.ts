import type { AxiosPromise } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { DishesResponse, ISearchAllParams, ISearchFavParams } from '../../../store/types/dish';
import { ENDPOINTS } from '../endpoints';
import { axiosInstance } from '../instance';

export const getDishes = createAsyncThunk(
    'menu/getDishes',
    (params: ISearchAllParams): AxiosPromise<DishesResponse> => axiosInstance.get(ENDPOINTS.DISHES.ALL, { params }),
);
export const getFavs = createAsyncThunk(
    'fav/getFavDishes',
    (params: ISearchFavParams): AxiosPromise<DishesResponse> => axiosInstance.get(ENDPOINTS.DISHES.FAV, { params }),
);
