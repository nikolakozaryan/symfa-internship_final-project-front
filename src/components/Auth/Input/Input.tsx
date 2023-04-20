import { FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import type { MyProps } from './types';
import { getValidationOptions } from '../../../shared/config/formValidationConfig';
import { AUTH_INPUTS, InputType } from '../../../shared/constants/authInputs';
import { useAppSelector } from '../../../store/selectors/appSelector';
import { VisibilityToggler } from '../../VisibilityToggler';

import styles from './Input.module.scss';

export const Input: FC<MyProps> = ({ inputType, form }) => {
    const isDark = useAppSelector(state => state.theme.dark);
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
            <span className={`${styles.input__label} ${isDark ? styles.input__label_dark : ''}`}>{label}</span>
            <input
                {...methods.register(
                    registerName,
                    form !== 'signin' ? getValidationOptions(methods, registerName as InputType) : {},
                )}
                id={inputType}
                className={`${styles.input} ${isDark ? styles.input_dark : ''}`}
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
