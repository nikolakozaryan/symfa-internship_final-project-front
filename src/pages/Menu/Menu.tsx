import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { MenuNavigation } from '../../components/Menu/Navigation';
import { getUser } from '../../shared/api/actions';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';

export const Menu = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(state => state.user.id);
    const { at, rt } = useAppSelector(state => state.auth);

    useEffect(() => {
        if (!userId && at && rt) {
            dispatch(getUser());
        }
    }, [at, dispatch, rt, userId]);

    return (
        <>
            <Outlet />
            <footer>
                <MenuNavigation />
            </footer>
        </>
    );
};
