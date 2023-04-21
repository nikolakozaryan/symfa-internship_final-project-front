import { useAppSelector } from '../../store/selectors/appSelector';

import styles from './styles.module.scss';

export const AddPaymentMethod = () => {
    const isDark = useAppSelector(state => state.theme.dark);

    return <button className={`${styles.button} ${isDark ? styles.button_dark : ''}`} type="button" />;
};
