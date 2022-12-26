import image from '../../asset/login.svg';
import Illustration from '../Illustration';
import LoginForm from '../LoginForm';

const Login = () => (
    <>
        <h1>Login to your account</h1>
        <div className="column">
            <Illustration src={image} alt="Login" />
            <LoginForm />
        </div>
    </>
);

export default Login;
