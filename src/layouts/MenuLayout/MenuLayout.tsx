import type { FC } from 'react';

import type { MyProps } from './types';

import styles from './MenuLayout.module.scss';

export const MenuLayout: FC<MyProps> = ({ children }) => <div className={styles.layout}>{children}</div>;
