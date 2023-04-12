import type { SignInFormInputs } from '../../components/Auth/Signin/types';

export type ReqSigninData = SignInFormInputs;
export type ResSigninData = {
    accessToken: string;
    refreshToken: string;
};
