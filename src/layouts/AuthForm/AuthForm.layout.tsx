import type { FC } from 'react';

import type { MyProps } from './types';

import styles from './layout.module.scss';

export const AuthFormLayout: FC<MyProps> = ({ children, type }) => (
    <section className={`${styles.layout} ${styles[type]}`}>{children}</section>
);
