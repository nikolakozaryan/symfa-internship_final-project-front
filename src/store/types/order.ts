export type PaymentType = {
    id: string;
    amount: number;
};

export type CreateOrderDto = {
    dishIds: string[];
    totalPrice: number;
};

type OrderDish = {
    id: string;
    productName: string;
};

export type OrdersResponse = {
    id: string;
    totalPrice: number;
    createdAt: string;
    dishes: OrderDish[];
};
