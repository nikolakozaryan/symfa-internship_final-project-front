import { Outlet } from 'react-router-dom';

import { MenuNavigation } from '../../components/MenuNavigation';

export const Menu = () => (
    <div>
        <Outlet />
        <footer>
            <MenuNavigation />
        </footer>
    </div>
);
