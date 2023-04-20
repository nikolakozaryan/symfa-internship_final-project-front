export const AUTH_INPUTS = {
    username: { label: 'username', type: 'text', registerName: 'username' },
    email: { label: 'email address', type: 'email', registerName: 'email' },
    password: { label: 'password', type: 'password', registerName: 'password' },
    confirm: { label: 'confirm password', type: 'password', registerName: 'confirm' },
};

export type InputType = keyof typeof AUTH_INPUTS;
export type InputTypeValue = { label: string; type: 'text' | 'email' | 'password'; registerName: InputType };
