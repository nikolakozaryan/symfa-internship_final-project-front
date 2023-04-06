import type { SignInFormInputs } from '../../components/Signin/types';

export type ReqSigninData = SignInFormInputs;
export type ResSigninData = {
    accessToken: string;
    refreshToken: string;
};
