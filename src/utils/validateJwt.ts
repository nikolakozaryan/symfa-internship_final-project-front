import { HALF_AN_HOUR } from '../shared/constants/time';
import { parseJwt } from './parseJwt';

export const isTokenExpired = (token: string) => {
    const tokenData = parseJwt(token);

    if (tokenData) {
        const { exp } = tokenData;

        if (Date.now() < (exp - HALF_AN_HOUR) * 1000) {
            return false;
        }
    }

    return true;
};
