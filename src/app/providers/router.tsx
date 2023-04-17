import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Account } from '../../components/Account';
import { Signin } from '../../components/Auth/Signin/Signin';
import { Signup } from '../../components/Auth/Signup/Signup';
import { History } from '../../components/History';
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

const stripePromise = loadStripe(
    'pk_test_51MsSd9EGkzaIt3SV9g5PvKMFGrYPwzlwhSHnPUGK78ZolRe2lCtZQyLlHRVgR319lBehN6jfND0r7wze5qhMgDUl00aY2y84wV',
);

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
                path: 'checkout',
                element: (
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
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
