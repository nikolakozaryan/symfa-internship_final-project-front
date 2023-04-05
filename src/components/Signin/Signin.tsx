import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { AuthFormLayout } from '../../layouts';
import { AuthInput } from '../AuthInput/AuthInput';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import styles from './Signin.module.scss';

type FormInputs = {
    email: string;
    password: string;
};

export const Signin = () => {
    const methods = useForm<FormInputs>({ reValidateMode: 'onChange' });
    const onSubmit: SubmitHandler<FormInputs> = data => console.log(data);

    return (
        <AuthFormLayout type="signin">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} id="signin" className={styles.form}>
                    <AuthInput inputType="email" />
                    <AuthInput inputType="password" />
                </form>
                <p className={styles['button-container']}>
                    <SubmitButton form="signin" content="login" />
                </p>
            </FormProvider>
        </AuthFormLayout>
    );
};
