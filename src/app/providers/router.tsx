import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Signin } from '../../components/Signin/Signin';
import { Signup } from '../../components/Signup/Signup';
// eslint-disable-next-line object-curly-newline
import { Auth, Favorite, FoodDetail, Home, Menu, Notifications, Orders, Profile } from '../../pages';
import { App } from '../app';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Auth />,
                children: [
                    { index: true, element: <Navigate to="signin" /> },
                    {
                        path: 'signin',
                        element: <Signin />,
                    },
                    {
                        path: 'signup',
                        element: <Signup />,
                    },
                ],
            },
            {
                path: 'menu',
                element: <Menu />,
                children: [
                    { index: true, element: <Navigate to="home" /> },
                    {
                        path: 'home',
                        element: <Home />,
                    },
                    {
                        path: 'favorite',
                        element: <Favorite />,
                    },
                    {
                        path: 'notifications',
                        element: <Notifications />,
                    },
                    {
                        path: 'profile',
                        element: <Profile />,
                    },
                ],
            },
            {
                path: 'menu/:id',
                element: <FoodDetail />,
            },
            {
                path: 'menu/order',
                element: <Orders />,
            },
        ],
    },
]);
