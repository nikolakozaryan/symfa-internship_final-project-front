import { Link } from 'react-router-dom';

import { API_URL } from '../../shared/constants/baseURL';
import { useAppSelector } from '../../store/selectors/appSelector';

import styles from './Avatar.module.scss';

export const Avatar = () => {
    const username = useAppSelector(state => state.user.username);
    const avatar = useAppSelector(state => state.user.avatar);

    return (
        <Link to="../profile">
            <img className={styles.avatar} src={API_URL + avatar} alt={`${username}-avatar`} />
        </Link>
    );
};
