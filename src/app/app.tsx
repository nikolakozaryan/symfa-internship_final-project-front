import { Outlet } from 'react-router-dom';

import { AppNavigator } from '../components/Navigator';
import { Socket } from '../components/Socket';
import { useAppSelector } from '../store/selectors/appSelector';

import './styles/index.scss';

export const App = () => {
    const isDark = useAppSelector(state => state.theme.dark);

    return (
        <div className={`app ${isDark ? 'app_dark' : ''}`}>
            <AppNavigator />
            <Socket />
            <Outlet />
        </div>
    );
};
