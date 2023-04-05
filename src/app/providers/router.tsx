import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Signin } from '../../components/Signin/Signin';
import { Signup } from '../../components/Signup/Signup';
// eslint-disable-next-line object-curly-newline
import { Auth, Favorite, Home, Menu, Notifications, Profile } from '../../pages';
import { App } from '../app';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Navigate to="signin" replace /> },
            {
                path: '/',
                element: <Auth />,
                children: [
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
                path: 'menu',
                element: <Home />,
                children: [
                    {
                        index: true,
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
        ],
    },
]);
