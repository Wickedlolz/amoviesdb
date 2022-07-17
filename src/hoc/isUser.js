import { useAuthContext } from '../contexts/Auth';
import { Navigate } from 'react-router-dom';

export const isUser = (Component) => {
    const WrappedComponent = (props) => {
        const { user } = useAuthContext();

        return user ? <Component {...props} /> : <Navigate to={'/signin'} />;
    };

    return WrappedComponent;
};
