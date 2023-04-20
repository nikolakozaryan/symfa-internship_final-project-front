import type { SignupFormInputs } from '../../components/Auth/Signup/types';

export type ReqSignupData = Omit<SignupFormInputs, 'confirm'>;
