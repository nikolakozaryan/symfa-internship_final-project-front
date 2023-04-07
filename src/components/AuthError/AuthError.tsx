import type { FC } from 'react';

import type { MyProps } from './types';

import styles from './AuthError.module.scss';

export const AuthError: FC<MyProps> = ({ error }) => {
    const renderError = error && error !== 'SUCCESS';

    return renderError ? <div className={styles.error}>{error}</div> : null;
};
