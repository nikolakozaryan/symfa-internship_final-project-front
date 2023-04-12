import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { MenuNavigation } from '../../components/Menu/Navigation';
import { MenuLayout } from '../../layouts/MenuLayout/MenuLayout';
import { getUser } from '../../shared/api/actions/user';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';

export const Menu = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(state => state.user.id);

    useEffect(() => {
        if (!userId) {
            dispatch(getUser());
        }
    }, [dispatch, userId]);

    return (
        <MenuLayout>
            <>
                <Outlet />
                <footer>
                    <MenuNavigation />
                </footer>
            </>
        </MenuLayout>
    );
};
