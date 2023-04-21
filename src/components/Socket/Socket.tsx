import { useEffect } from 'react';
import { io } from 'socket.io-client';

import { API_URL } from '../../shared/constants/baseURL';
import { SOCKET_EVENTS } from '../../shared/enums/socketEvents';
import { useAppSelector } from '../../store/selectors/appSelector';
import { useAppDispatch } from '../../store/services/appDispatch';
import { addDelivery } from '../../store/slices/delivery';

export const Socket = () => {
    const dispatch = useAppDispatch();
    const at = useAppSelector(state => state.auth.at);

    const socketInit = () => {
        const socket = io(API_URL, {
            auth: {
                token: at,
            },
        });

        socket.on(SOCKET_EVENTS.Delivery, data => {
            dispatch(addDelivery(data));
        });

        return () => {
            socket.disconnect();
        };
    };

    useEffect(socketInit, [at, dispatch]);

    return null;
};
