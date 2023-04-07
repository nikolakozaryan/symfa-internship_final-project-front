import type { InputType } from '../../shared/constants/authInputs';

export type MyProps = {
    inputType: InputType;
    form: 'signin' | 'signup';
};
