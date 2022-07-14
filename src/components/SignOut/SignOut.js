import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as userService from '../../services/user';
import { AuthContext } from '../../contexts/Auth';
import { NotificationContext } from '../../contexts/Notification';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function SignOut() {
    const { signOut } = useContext(AuthContext);
    const { addNotification } = useContext(NotificationContext);
    const navigate = useNavigate();

    useEffect(() => {
        userService
            .signOut()
            .then(() => {
                signOut();
                addNotification('Successfully logged out.', 'Success');
                navigate('/');
            })
            .catch((error) => addNotification(error.message, 'Error'));
    }, [signOut, navigate, addNotification]);

    return <LoadingSpinner />;
}

export default SignOut;
