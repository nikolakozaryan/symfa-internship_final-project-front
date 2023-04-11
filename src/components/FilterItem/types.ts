import type { DishType, TasteType } from '../../shared/constants/dishes';
import type { MenuRoutes } from '../../shared/constants/menuRoutes';

export type MyProps = {
    active: boolean;
    pageType: MenuRoutes;
    type?: DishType;
    taste?: TasteType;
};
