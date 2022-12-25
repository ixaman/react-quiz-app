import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();

    return currentUser ? (
        <Route {...rest}>{(props) => <Component {...props} />}</Route>
    ) : (
        <Redirect to="/login" />
    );
}
export default PrivateRoute;
