import type { RegisterOptions, UseFormReturn } from 'react-hook-form';

import type { RegisterType } from '../constants/authInputs';

export const getValidationOptions = (methods: UseFormReturn, inputType: RegisterType): RegisterOptions => {
    switch (inputType) {
        case 'email':
            return {
                pattern: { value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, message: 'Should be a valid email' },
            };
        case 'password':
            return {
                minLength: {
                    value: 6,
                    message: 'Should be equal or longer than 6 symbols',
                },
            };
        case 'username':
            return {
                minLength: { value: 4, message: 'Should be equal or longer than 4 symbols' },
                pattern: { value: /^.[A-Za-z\s]+$/, message: 'Should contain only latin letters' },
            };
        case 'confirm':
            return {
                // eslint-disable-next-line consistent-return
                validate: (val: string) => {
                    if (methods.watch('password') !== val) {
                        return 'Passwords do no match';
                    }
                },
            };
        default:
            return {};
    }
};
