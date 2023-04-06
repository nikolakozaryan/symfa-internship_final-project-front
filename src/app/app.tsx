import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { refresh } from '../shared/api/actions';
import { useAppSelector } from '../store/selectors/appSelector';
import { useAppDispatch } from '../store/services/appDispatch';
import { isTokenValid } from '../utils/validateJwt';

export const App = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const at = useAppSelector(state => state.auth.at);
    const rt = useAppSelector(state => state.auth.rt);

    useEffect(() => {
        const isAtValid = isTokenValid(at);

        if (isAtValid && pathname.match(/^\/sign(in|up)/)) navigate('menu/home');

        if (!isAtValid) {
            const isRtValid = isTokenValid(rt);

            if (isRtValid) dispatch(refresh());
            else if (pathname.match(/^\/menu/)) navigate('/signin');
        }
    }, [pathname, at, navigate, rt, dispatch]);

    return (
        <div className="app">
            <Outlet />
        </div>
    );
};
