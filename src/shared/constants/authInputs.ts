export const AUTH_INPUTS = {
    username: { label: 'username', type: 'text' },
    email: { label: 'email address', type: 'email' },
    password: { label: 'password', type: 'password' },
    confirm: { label: 'confirm password', type: 'password' },
};

export type InputTypeValue = { label: string; type: 'text' | 'email' | 'password' };
export type InputType = keyof typeof AUTH_INPUTS;
