export const DISH_TYPES = ['burger', 'sushi', 'pizza', 'wok', 'kebab', 'vegetarian', 'drink'] as const;
export const DISH_TASTE = ['sweet', 'sour', 'bitter', 'salty', 'savory'] as const;

export type DishType = (typeof DISH_TYPES)[number];
export type TasteType = (typeof DISH_TASTE)[number];
