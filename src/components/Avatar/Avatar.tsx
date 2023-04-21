import { Link } from 'react-router-dom';

import { API_URL } from '../../shared/constants/baseURL';
import { useAppSelector } from '../../store/selectors/appSelector';

import styles from './styles.module.scss';

export const Avatar = () => {
    const username = useAppSelector(state => state.user.username);
    const avatar = useAppSelector(state => state.user.avatar);

    const isAvatarPathRelative = (avatarLink: string) => avatarLink.startsWith('/');

    return (
        <Link to="../profile">
            <img
                className={styles.avatar}
                src={isAvatarPathRelative(avatar) ? API_URL + avatar : avatar}
                alt={`${username}-avatar`}
            />
        </Link>
    );
};
