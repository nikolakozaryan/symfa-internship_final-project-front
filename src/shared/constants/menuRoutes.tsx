import { BagIcon, BellIcon, BookIcon, HomeIcon, ProfileIcon } from '../../components/Menu/NavIcons';
import { MenuRoutes } from '../enums/menuRoutes';

export type MenuLinkType = {
    id: number;
    routeTo: MenuRoutes;
    icon: JSX.Element;
};

export const MENU_LINKS: MenuLinkType[] = [
    { id: 1, routeTo: MenuRoutes.Home, icon: <HomeIcon /> },
    { id: 2, routeTo: MenuRoutes.Favorite, icon: <BookIcon /> },
    { id: 3, routeTo: MenuRoutes.Order, icon: <BagIcon /> },
    { id: 4, routeTo: MenuRoutes.Notifications, icon: <BellIcon /> },
    { id: 5, routeTo: MenuRoutes.Profile, icon: <ProfileIcon /> },
];
