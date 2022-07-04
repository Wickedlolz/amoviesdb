import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as userService from '../../services/user';
import AuthContext from '../../contexts/Auth';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function Logout() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        userService
            .logout()
            .then(() => {
                logout();
                navigate('/');
            })
            .catch((error) => console.log(error));
    }, []);

    return <LoadingSpinner />;
}

export default Logout;
