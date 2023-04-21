import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../store/selectors/appSelector';

import styles from './styles.module.scss';

export const ConfirmButton = () => {
    const cart = useAppSelector(state => state.cart.dishes);
    const navigate = useNavigate();

    const handleClick = async () => {
        navigate('../checkout');
    };

    return (
        <button disabled={!cart.length} onClick={handleClick} type="button" className={styles.submit}>
            confirm order
        </button>
    );
};
