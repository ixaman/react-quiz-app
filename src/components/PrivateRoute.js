import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoutes() {
    const { currentUser } = useAuth();
    const location = useLocation();

    return currentUser ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
}
export default PrivateRoutes;
