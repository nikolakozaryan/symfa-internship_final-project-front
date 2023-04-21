import { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import type { SignInFormInputs } from '../Signin/types';
import { forgot, login } from '../../../shared/api/actions';
import { useAppSelector } from '../../../store/selectors/appSelector';
import { useAppDispatch } from '../../../store/services/appDispatch';
import { resetError } from '../../../store/slices/auth';
import { SubmitButton } from '../../SubmitButton';
import { Error } from '../Error';
import { Input } from '../Input';

import styles from './styles.module.scss';

export const Forgot = () => {
    const dispatch = useAppDispatch();
    const error = useAppSelector(state => state.auth.errorMessage);
    const isDark = useAppSelector(state => state.theme.dark);
    const navigate = useNavigate();
    const methods = useForm<SignInFormInputs>({ reValidateMode: 'onChange' });
    const onSubmit: SubmitHandler<SignInFormInputs> = data => dispatch(forgot(data));

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
        <div className={styles.container}>
            <Error error={error} />
            <button
                className={`${styles.back} ${isDark ? styles.back_dark : ''}`}
                type="button"
                onClick={() => {
                    navigate(-1);
                }}
            />
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} id="forgot" className={styles.form}>
                    <Input inputType="email" form="forgot" />
                    <Input inputType="password" form="forgot" />
                </form>

                <div className={styles.button__container}>
                    <SubmitButton form="forgot" content="submit" />
                </div>
            </FormProvider>
        </div>
    );
};
