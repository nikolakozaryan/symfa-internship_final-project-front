import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { refresh } from '../shared/api/actions';
import { useAppSelector } from '../store/selectors/appSelector';
import { useAppDispatch } from '../store/services/appDispatch';
import { isTokenExpired } from '../utils/validateJwt';

export const App = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const at = useAppSelector(state => state.auth.at);
    const rt = useAppSelector(state => state.auth.rt);

    useEffect(() => {
        const isAtExpired = isTokenExpired(at);

        if (isAtExpired) {
            const isRtExpired = isTokenExpired(rt);

            if (isRtExpired) {
                if (pathname.match(/^\/menu/)) {
                    navigate('/signin');
                }
            } else {
                dispatch(refresh());
            }
        }

        if (!isAtExpired && pathname.match(/^\/sign(in|up)/)) {
            navigate('menu/home');
        }
    }, [pathname, at, navigate, rt, dispatch]);

    return (
        <div className="app">
            <Outlet />
        </div>
    );
};
