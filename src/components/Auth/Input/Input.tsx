import { FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import type { MyProps } from './types';
import { getValidationOptions } from '../../../shared/config/formValidationConfig';
import { AUTH_INPUTS, RegisterType } from '../../../shared/constants/authInputs';
import { VisibilityToggler } from '../../VisibilityToggler';

import styles from './Input.module.scss';

export const Input: FC<MyProps> = ({ inputType, form }) => {
    const methods = useFormContext();
    const {
        formState: { errors },
    } = methods;
    const { type, label, registerName } = AUTH_INPUTS[inputType];
    const [dynamicType, setDynamicType] = useState<string>('');

    useEffect(() => {
        setDynamicType(type);
    }, [type]);

    const changeInputType = (curType: string) => {
        setDynamicType(curType);
    };

    return (
        <label className={styles.input__label_wrapper} htmlFor={inputType}>
            <span className={styles.input__label}>{label}</span>
            <input
                {...methods.register(
                    registerName,
                    form === 'signup' ? getValidationOptions(methods, registerName as RegisterType) : {},
                )}
                id={inputType}
                className={styles.input}
                type={dynamicType}
                required
            />
            {type === 'password' && <VisibilityToggler curType={dynamicType} changeInputType={changeInputType} />}
            {errors[registerName] && (
                <span className={styles.input__error}>
                    {JSON.stringify(errors[registerName]?.message).replaceAll('"', '')}
                </span>
            )}
        </label>
    );
};
