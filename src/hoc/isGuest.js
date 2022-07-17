import { useAuthContext } from '../contexts/Auth';
import { Navigate } from 'react-router-dom';

export const isGuest = (Component) => {
    const WrappedComponent = (props) => {
        const { user } = useAuthContext();

        return user === null ? <Component {...props} /> : <Navigate to={'/'} />;
    };

    return WrappedComponent;
};
