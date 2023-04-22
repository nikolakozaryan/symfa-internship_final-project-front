import { Outlet } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';

import { AppNavigator } from '../components/Navigator';
import { Socket } from '../components/Socket';
import { useAppSelector } from '../store/selectors/appSelector';
import { stripePromise } from './providers/stripe';

import './styles/index.scss';

export const App = () => {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <div className={`app ${isDark ? 'app_dark' : ''}`}>
            <AppNavigator />
            <Socket />
            <Elements stripe={stripePromise}>
                <Outlet />
            </Elements>
        </div>
    );
};
