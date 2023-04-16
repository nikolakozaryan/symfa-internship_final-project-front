import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import type { SignInFormInputs } from './types';
import { AuthFormLayout } from '../../../layouts';
import { login } from '../../../shared/api/actions';
import { useAppDispatch } from '../../../store/services/appDispatch';
import { GoogleButton } from '../../GoogleButton/GoogleButton';
import { SubmitButton } from '../../SubmitButton';
import { Input } from '../Input';

import styles from './Signin.module.scss';

export const Signin = () => {
    const dispatch = useAppDispatch();
    const methods = useForm<SignInFormInputs>({ reValidateMode: 'onChange' });
    const onSubmit: SubmitHandler<SignInFormInputs> = data => dispatch(login(data));

    return (
        <AuthFormLayout type="signin">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} id="signin" className={styles.form}>
                    <Input form="signin" inputType="email" />
                    <Input form="signin" inputType="password" />
                </form>
                <div className={styles.buttons}>
                    <p className={styles['button-container']}>
                        <SubmitButton form="signin" content="login" />
                    </p>
                    <GoogleButton />
                </div>
            </FormProvider>
        </AuthFormLayout>
    );
};
