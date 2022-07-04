import { useAuth } from '../contexts/Auth';
import { Navigate } from 'react-router-dom';

export const isAuth = (Component) => {
    const WrappedComponent = (props) => {
        const { user } = useAuth();

        return user ? <Component {...props} /> : <Navigate to={'/signin'} />;
    };

    return WrappedComponent;
};
