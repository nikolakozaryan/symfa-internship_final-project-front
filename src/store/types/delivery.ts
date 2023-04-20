export type Deliveryman = {
    id: string;
    avatar: string;
    name: string;
};

interface IDelivery {
    id: string;
    destination: string;
    deliveryman: Deliveryman;
}

export interface IDeliveryResponse extends IDelivery {
    deliveryDate: string;
}

export interface IDeliveryData extends IDelivery {
    deliveryDate: Date;
}
