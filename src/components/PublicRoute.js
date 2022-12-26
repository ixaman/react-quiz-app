import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PublicRoutes() {
    const { currentUser } = useAuth();

    return !currentUser ? <Outlet /> : <Navigate to="/" />;
}
export default PublicRoutes;
