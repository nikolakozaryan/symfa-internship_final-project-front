import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { MenuNavigation } from '../../components/Menu/Navigation';
import { getDeliveries, getUser } from '../../shared/api/actions';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';

export const Menu = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(state => state.user.id);
    const { at, rt } = useAppSelector(state => state.auth);
    const { deliveries, errorMessage } = useAppSelector(state => state.delivery);

    useEffect(() => {
        if (!userId && at && rt) {
            dispatch(getUser());
        }
    }, [at, dispatch, rt, userId]);

    useEffect(() => {
        if ((!deliveries.length) && errorMessage !== 'SUCCESS') {
            dispatch(getDeliveries());
        }
    }, [deliveries, dispatch, errorMessage]);

    return (
        <>
            <Outlet />
            <footer>
                <MenuNavigation />
            </footer>
        </>
    );
};
