import { FC, useState } from 'react';

import type { MyProps } from './types';

import styles from './styles.module.scss';

export const VisibilityToggler: FC<MyProps> = ({ changeInputType, curType }) => {
    const [isClosed, setIsClosed] = useState(false);

    const handleClick = () => {
        setIsClosed(prev => !prev);
        changeInputType(curType === 'password' ? 'text' : 'password');
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`${styles.toggler} ${isClosed ? styles.toggler_active : ''}`}
        />
    );
};
