import { AuthFormLayout } from '../../layouts';
import { AuthInput } from '../AuthInput/AuthInput';
import { SubmitButton } from '../SubmitButton/SubmitButton';

import styles from './Signin.module.scss';

export const Signin = () => (
    <AuthFormLayout type="signin">
        <>
            <form id="signin" className={styles.form}>
                <AuthInput inputType="email" />
                <AuthInput inputType="password" />
            </form>
            <p className={styles['button-container']}>
                <SubmitButton form="signin" content="login" />
            </p>
        </>
    </AuthFormLayout>
);
