import { FC, useEffect, useState } from 'react';

import type { MyProps } from './types';
import { AUTH_INPUTS } from '../../shared/constants/authInputs';
import { VisibilityToggler } from '../VisibilityToggler/VisibilityToggler';

import styles from './AuthInput.module.scss';

export const AuthInput: FC<MyProps> = ({ inputType }) => {
    const { type, label } = AUTH_INPUTS[inputType];
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
            <input id={inputType} className={styles.input} type={dynamicType} required />
            {type === 'password' && <VisibilityToggler curType={dynamicType} changeInputType={changeInputType} />}
        </label>
    );
};
