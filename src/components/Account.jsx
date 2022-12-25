import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import classes from '../styles/Account.module.css';

const Account = () => {
    const { currentUser, logout } = useAuth();
    console.log(currentUser);
    return (
        <div className={classes.account}>
            {currentUser ? (
                <>
                    <span className="material-icons-outlined" title="Account">
                        account_circle
                    </span>
                    <span>{currentUser.displayName}</span>
                    <span className="material-icons-outlined" onClick={logout} title="Logout">
                        {' '}
                        logout{' '}
                    </span>
                </>
            ) : (
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
};

export default Account;
