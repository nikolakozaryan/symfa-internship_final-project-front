import type { DishType, TasteType } from '../../shared/constants/dishes';
import type { MenuRoutes } from '../../shared/enums/menuRoutes';

export type MyProps = {
    active: boolean;
    pageType: MenuRoutes;
    type?: DishType;
    taste?: TasteType;
};
