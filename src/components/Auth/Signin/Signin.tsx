import { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

import type { SignInFormInputs } from './types';
import { AuthFormLayout } from '../../../layouts';
import { login } from '../../../shared/api/actions';
import { useAppSelector } from '../../../store/selectors/appSelector';
import { useAppDispatch } from '../../../store/services/appDispatch';
import { resetError } from '../../../store/slices/auth.slice';
import { GoogleButton } from '../../GoogleButton/GoogleButton';
import { SubmitButton } from '../../SubmitButton';
import { Input } from '../Input';

import styles from './Signin.module.scss';

export const Signin = () => {
    const dispatch = useAppDispatch();
    const isDark = useAppSelector(state => state.theme.dark);
    const methods = useForm<SignInFormInputs>({ reValidateMode: 'onChange' });
    const onSubmit: SubmitHandler<SignInFormInputs> = data => dispatch(login(data));

    useEffect(() => {
        dispatch(resetError());
    }, [dispatch]);

    return (
        <AuthFormLayout type="signin">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} id="signin" className={styles.form}>
                    <Input form="signin" inputType="email" />
                    <Input form="signin" inputType="password" />
                    <NavLink className={`${styles.forgot} ${isDark ? styles.forgot_dark : ''}`} to="../forgot">
                        forgot password?
                    </NavLink>
                </form>
                <div className={styles.buttons}>
                    <p className={styles.button__container}>
                        <SubmitButton form="signin" content="login" />
                    </p>
                    <GoogleButton />
                </div>
            </FormProvider>
        </AuthFormLayout>
    );
};
