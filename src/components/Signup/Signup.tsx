import { AuthFormLayout } from '../../layouts';
import { AuthInput } from '../AuthInput/AuthInput';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import styles from './Signup.module.scss';

export const Signup = () => (
    <AuthFormLayout type="signup">
        <>
            <form className={styles.form}>
                <AuthInput inputType="username" />
                <AuthInput inputType="email" />
                <AuthInput inputType="password" />
                <AuthInput inputType="confirm" />
            </form>
            <p className={styles['button-container']}>
                <SubmitButton form="signup" content="signup" />
            </p>
        </>
    </AuthFormLayout>
);
