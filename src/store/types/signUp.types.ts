import type { SignupFormInputs } from '../../components/Signup/types';

export type ReqSignupData = Omit<SignupFormInputs, 'confirm'>;
