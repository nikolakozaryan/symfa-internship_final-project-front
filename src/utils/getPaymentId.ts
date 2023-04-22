export const getPaymentId = (secret: string): string => secret.split('_').slice(0, 2).join('_');
