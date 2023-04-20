/* eslint-disable implicit-arrow-linebreak */
import type { AxiosPromise } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import type { DishesResponse, ISearchAllParams, ISearchFavParams } from '../../../store/types/dish';
import { ENDPOINTS } from '../endpoints';
import { axiosInstance } from '../instance';

const dishes = (params: ISearchAllParams): AxiosPromise<DishesResponse> =>
    axiosInstance.get(ENDPOINTS.DISHES.ALL, { params });

const favs = (params: ISearchFavParams): AxiosPromise<DishesResponse> =>
    axiosInstance.get(ENDPOINTS.DISHES.FAV, { params });

export const getDishes = createAsyncThunk('menu/getDishes', dishes);
export const getFavs = createAsyncThunk('fav/getFavDishes', favs);
