import { useAppSelector } from '../../store/selectors/appSelector';

import styles from './styles.module.scss';

export const NothingFound = () => {
    const isDark = useAppSelector(state => state.theme.dark);

    return <div className={`${styles.empty} ${isDark ? styles.empty_dark : ''}`}>Found nothing</div>;
};
