import type { CreatePaymentMethodDto } from '../../store/types/payments';

export const DEFAULT_CARD: CreatePaymentMethodDto = {
    number: '4242424242424242',
    exp_month: 12,
    exp_year: 2023,
    cvc: '123',
};
