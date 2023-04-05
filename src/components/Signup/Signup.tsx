import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { AuthFormLayout } from '../../layouts';
import { AuthInput } from '../AuthInput/AuthInput';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import styles from './Signup.module.scss';

type FormInputs = {
    username: string;
    email: string;
    password: string;
    confirm: string;
};

export const Signup = () => {
    const methods = useForm<FormInputs>({ reValidateMode: 'onChange' });
    const onSubmit: SubmitHandler<FormInputs> = data => console.log(data);

    return (
        <AuthFormLayout type="signup">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} id="signup" className={styles.form}>
                    <AuthInput inputType="username" />
                    <AuthInput inputType="email" />
                    <AuthInput inputType="password" />
                    <AuthInput inputType="confirm" />
                </form>
                <p className={styles['button-container']}>
                    <SubmitButton form="signup" content="signup" />
                </p>
            </FormProvider>
        </AuthFormLayout>
    );
};
