import { Outlet } from 'react-router-dom';

export const Menu = () => (
    <div>
        <Outlet />
        <footer>Footer</footer>
    </div>
);
