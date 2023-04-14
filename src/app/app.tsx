import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { refresh } from '../shared/api/actions';
import { useAppSelector } from '../store/selectors/appSelector';
import { useAppDispatch } from '../store/services/appDispatch';
import { isTokenExpired } from '../utils/validateJwt';

export const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const at = useAppSelector(state => state.auth.at);
    const rt = useAppSelector(state => state.auth.rt);

    useEffect(() => {
        const regex = /^\/auth\/sign(in|up)/;
        const isAtExpired = isTokenExpired(at);

        if (isAtExpired) {
            const isRtExpired = isTokenExpired(rt);

            if (isRtExpired) {
                const isAuthPages = regex.test(location.pathname);

                if (!isAuthPages) {
                    navigate('/auth/signin');
                }
            } else {
                dispatch(refresh());
            }
        }

        const test = !isAtExpired && (regex.test(location.pathname) || /^\/$/.test(location.pathname));

        if (test) {
            navigate('menu/home');
        }
    }, [location, at, rt, dispatch, navigate]);

    return (
        <div className="app">
            <Outlet />
        </div>
    );
};
