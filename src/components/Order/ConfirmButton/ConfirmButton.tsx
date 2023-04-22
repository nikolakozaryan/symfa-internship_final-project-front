import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getSecret } from '../../../shared/api/actions';
import { useAppSelector } from '../../../store/selectors/appSelector';
import { useAppDispatch } from '../../../store/services/appDispatch';
import { setSecret } from '../../../store/slices/cart';
import { Loader } from '../../Loader';

import styles from './styles.module.scss';

export const ConfirmButton = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(state => state.cart.dishes);
    const requestBody = cart.map(item => ({ id: item.dish.id, amount: item.amount }));
    const navigate = useNavigate();
    const secret = useAppSelector(state => state.cart.secret);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        if (!secret) {
            setIsLoading(true);
            const { data } = await getSecret(requestBody);

            setIsLoading(false);

            dispatch(setSecret(data));
        }

        navigate('../payments');
    };

    return (
        <button disabled={!cart.length} onClick={handleClick} type="button" className={styles.submit}>
            {isLoading ? <Loader /> : 'confirm order'}
        </button>
    );
};
