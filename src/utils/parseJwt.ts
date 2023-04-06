import jwtDecode from 'jwt-decode';

type DecodedToken = {
    sub: string;
    email: string;
    iat: number;
    exp: number;
};

export const parseJwt = (token: string) => {
    try {
        return jwtDecode(token) as DecodedToken;
    } catch (e) {
        return null;
    }
};
