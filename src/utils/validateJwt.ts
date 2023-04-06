import { parseJwt } from './parseJwt';

export const isTokenValid = (token: string) => {
    const userdata = parseJwt(token);

    if (userdata) {
        const { exp } = userdata;

        if (Date.now() < exp * 1000) {
            return true;
        }
    }

    return userdata;
};
