import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { PaymentIntent } from '@stripe/stripe-js';
import { useStripe } from '@stripe/react-stripe-js';

import { createOrder, createPaymentMethod } from '../../shared/api/actions';
import { DEFAULT_CARD } from '../../shared/constants/defaultCard';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { resetCartState } from '../../store/slices/cart';
import { parseCardNumber } from '../../utils/parseCardNumber';
import { Loader } from '../Loader';

import styles from './styles.module.scss';

export const PaymentMethodSelector = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const stripe = useStripe();
    const { secret, dishes: cart } = useAppSelector(state => state.cart);
    const { email } = useAppSelector(state => state.user);
    const [isLoading, setIsLoading] = useState(false);
    const isDark = useAppSelector(state => state.theme.dark);

    const handleDefaultClick = async () => {
        try {
            setIsLoading(true);
            const { data: paymentMethod } = await createPaymentMethod(DEFAULT_CARD);

            const result = await stripe?.confirmCardPayment(secret, {
                payment_method: paymentMethod.id,
                receipt_email: email,
            });

            setIsLoading(false);

            if (result?.error) {
                navigate('../failed');
            } else {
                const { amount } = result?.paymentIntent as PaymentIntent;

                const dishIds = cart.map(item => item.dish.id);
                const totalPrice = amount / 100;

                await createOrder({ dishIds, totalPrice });

                dispatch(resetCartState());
                navigate('../success');
            }
        } catch (error) {
            navigate('../failed');
        }
    };

    const handleNewClick = () => {
        navigate('../checkout');
    };

    return (
        <div className={styles.payments}>
            <div className={`${styles.payments__container} ${isDark ? styles.payments__container_dark : ''}`}>
                <button
                    className={`${styles.button} ${styles.button_default} ${isDark ? styles.button_default_dark : ''}`}
                    type="button"
                    onClick={handleDefaultClick}
                >
                    {isLoading ? <Loader /> : (
                        <>
                            <img src="/assets/icons/mastercard-logo.png" alt="" srcSet="" />
                            <span>
                                {parseCardNumber(DEFAULT_CARD.number)}
                            </span>
                            <span>
                                {`${DEFAULT_CARD.exp_month}/${DEFAULT_CARD.exp_year}`}
                            </span>
                        </>
                    )}

                </button>
            </div>
            <button
                className={`${styles.button} ${styles.button_new}`}
                type="button"
                onClick={handleNewClick}
            >
                Pay with new card
            </button>
        </div>
    );
};
