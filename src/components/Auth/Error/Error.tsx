import type { FC } from 'react';

import type { MyProps } from './types';

import styles from './styles.module.scss';

export const Error: FC<MyProps> = ({ error }) => {
    const renderError = error && error !== 'SUCCESS';

    return renderError ? <div className={styles.error}>{error}</div> : null;
};
