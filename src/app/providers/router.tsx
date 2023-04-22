import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Account } from '../../components/Account';
import { Forgot } from '../../components/Auth/Forgot';
import { Signin } from '../../components/Auth/Signin/Signin';
import { Signup } from '../../components/Auth/Signup/Signup';
import { History } from '../../components/History';
import { PaymentMethodSelector } from '../../components/PaymentMethodSelector';
import { Payments } from '../../components/Payments';
import {
    Auth,
    CheckoutForm,
    FailedPayment,
    Favorite,
    FoodDetail,
    Home,
    Menu,
    Notifications,
    Orders,
    Profile,
    SuccessPayment,
} from '../../pages';
import { App } from '../app';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'auth',
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
                path: 'auth/forgot',
                element: <Forgot />,
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
                        children: [
                            { index: true, element: <Navigate to="payment" /> },
                            {
                                path: 'payment',
                                element: <Payments />,
                            },
                            {
                                path: 'account',
                                element: <Account />,
                            },
                            {
                                path: 'history',
                                element: <History />,
                            },
                        ],
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
            {
                path: 'payments',
                element: <PaymentMethodSelector />,

            },
            {
                path: 'checkout',
                element: (

                    <CheckoutForm />
                ),
            },
            {
                path: 'success',
                element: <SuccessPayment />,
            },
            {
                path: 'failed',
                element: <FailedPayment />,
            },
        ],
    },
]);
