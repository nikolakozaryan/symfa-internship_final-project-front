import { useAppSelector } from '../../../store/selectors/appSelector';
import { Avatar } from '../../Avatar';

import styles from './styles.module.scss';

export const UserInfo = () => {
    const isDark = useAppSelector(state => state.theme.dark);
    const { username, id, email } = useAppSelector(state => state.user);

    return (
        <div className={styles.info}>
            <div className={styles.info__avatar}>
                <Avatar />
            </div>
            <div className={styles.info__userdata}>
                <span className={`${styles.username} ${isDark ? styles.username_dark : ''}`}>{username}</span>
                <span className={styles.email}>{email}</span>
                <span className={styles.id} title={id}>{`User ID: ${id}`}</span>
            </div>
        </div>
    );
};
