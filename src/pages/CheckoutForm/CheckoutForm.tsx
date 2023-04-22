import { FormEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type {
    CreatePaymentMethodData,
    PaymentIntent,
    StripeCardNumberElement,
    StripeElementStyle,
} from '@stripe/stripe-js';
import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { Loader } from '../../components/Loader';
import { createOrder } from '../../shared/api/actions';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { resetCartState } from '../../store/slices/cart';

import styles from './styles.module.scss';

export const CheckoutForm = () => {
    const isDark = useAppSelector(state => state.theme.dark);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useAppDispatch();
    const { email, username } = useAppSelector(state => state.user);
    const cart = useAppSelector(state => state.cart.dishes);
    const secret = useAppSelector(state => state.cart.secret);
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    if (!cart.length) {
        navigate('../menu/home');
    }

    const handleBack = async (e: MouseEvent) => {
        e.preventDefault();
        navigate(-1);
    };

    const handleFormSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const cardNumberElement = elements?.getElement(CardNumberElement) as StripeCardNumberElement;

            const createPaymentMethodData: CreatePaymentMethodData = {
                type: 'card',
                card: cardNumberElement,
                billing_details: {
                    name: username,
                    email,
                },
            };

            const paymentMethodReq = await stripe?.createPaymentMethod(createPaymentMethodData);

            const result = await stripe?.confirmCardPayment(secret, {
                payment_method: paymentMethodReq?.paymentMethod?.id,
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

    const style: StripeElementStyle = {
        base: {
            iconColor: '#FDC27A',
            fontSize: '20px',
            color: isDark ? '#D1D1D1' : '#104E5B',
        },
    };

    return (
        <div className={`${styles.container} ${isDark ? styles.container_dark : ''}`}>
            <form className={`${styles.form} ${isDark ? styles.form_dark : ''}`} onSubmit={handleFormSubmit}>
                <CardNumberElement
                    className={`${styles.input} ${isDark ? styles.input_dark : ''}`}
                    options={{
                        style,
                        showIcon: true,
                        iconStyle: 'solid',
                    }}
                />
                <CardExpiryElement
                    className={`${styles.input} ${styles.input_date} ${isDark ? styles.input_dark : ''}`}
                    options={{ style }}
                />
                <CardCvcElement
                    className={`${styles.input} ${styles.input_cvc} ${isDark ? styles.input_dark : ''}`}
                    options={{ style }}
                />
                <button
                    onClick={handleBack}
                    disabled={isLoading}
                    className={`${styles.form__button} ${styles.form__button_back}`}
                    type="button"
                >
                    Back
                </button>
                <button
                    disabled={isLoading}
                    className={`${styles.form__button} ${styles.form__button_submit}`}
                    type="submit"
                >
                    {isLoading ? <Loader /> : 'Pay'}
                </button>
            </form>
        </div>
    );
};
