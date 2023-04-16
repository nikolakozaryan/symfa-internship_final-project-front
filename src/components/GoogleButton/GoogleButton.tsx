import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

import { googleAuth } from '../../shared/api/actions';
import { useAppDispatch } from '../../store/services/appDispatch';

export const GoogleButton = () => {
    const dispatch = useAppDispatch();

    return (
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}>
            <GoogleLogin
                width="248"
                shape="pill"
                onSuccess={async credentialResponse => {
                    dispatch(googleAuth({ token: credentialResponse.credential || '' }));
                }}
            />
        </GoogleOAuthProvider>
    );
};
