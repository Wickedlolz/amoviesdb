import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../contexts/Auth';

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={'/welcome'} replace />;
    }

    return children ? children : <Outlet />;
}

export default ProtectedRoute;
