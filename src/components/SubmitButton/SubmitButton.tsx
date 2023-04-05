import type { FC } from 'react';

import type { MyProps } from './types';

import styles from './SubmitButton.module.scss';

export const SubmitButton: FC<MyProps> = ({ form, content }) => (
    <button className={styles.button} form={form} type="submit">
        {content}
    </button>
);
