import { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import type { SignupFormInputs } from './types';
import { AuthFormLayout } from '../../../layouts';
import { login, register } from '../../../shared/api/actions';
import { useAppSelector } from '../../../store/selectors/appSelector';
import { useAppDispatch } from '../../../store/services/appDispatch';
import { resetError } from '../../../store/slices/auth';
import { SubmitButton } from '../../SubmitButton';
import { Input } from '../Input';

import styles from './styles.module.scss';

export const Signup = () => {
    const error = useAppSelector(state => state.auth.errorMessage);
    const dispatch = useAppDispatch();
    const methods = useForm<SignupFormInputs>({ reValidateMode: 'onChange' });
    const onSubmit: SubmitHandler<SignupFormInputs> = data => {
        const { username, password, email } = data;

        dispatch(register({ username, password, email }));
    };

    useEffect(() => {
        if (error === 'SUCCESS') {
            const email = methods.getValues('email');
            const password = methods.getValues('password');

            dispatch(login({ email, password }));
        }
    }, [dispatch, error, methods]);

    useEffect(() => {
        dispatch(resetError());
    }, [dispatch]);

    return (
        <AuthFormLayout type="signup">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} id="signup" className={styles.form}>
                    <Input form="signup" inputType="username" />
                    <Input form="signup" inputType="email" />
                    <Input form="signup" inputType="password" />
                    <Input form="signup" inputType="confirm" />
                </form>
                <p className={styles['button-container']}>
                    <SubmitButton form="signup" content="signup" />
                </p>
            </FormProvider>
        </AuthFormLayout>
    );
};
