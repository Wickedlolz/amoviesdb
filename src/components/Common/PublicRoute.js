import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/Auth';

function PublicRoute({ children }) {
    const { isAuthenticated } = useAuthContext();

    if (isAuthenticated) {
        return <Navigate to={'/'} replace />;
    }

    return children ? children : <Outlet />;
}

export default PublicRoute;
