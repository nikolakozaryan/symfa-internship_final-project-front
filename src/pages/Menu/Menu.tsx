import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { MenuNavigation } from '../../components/MenuNavigation';
import { MenuLayout } from '../../layouts/MenuLayout/MenuLayout';
import { getUser } from '../../shared/api/actions/user';
import { useAppDispatch } from '../../store/services/appDispatch';

export const Menu = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

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
