import image from '../../asset/signup.svg';
import classes from '../../styles/Signup.module.css';
import Illustration from '../Illustration';
import SignupForm from '../SignupForm';

const Signup = () => (
    <>
        <h1>Create an account</h1>
        <div className="column">
            <Illustration src={image} alt="Signup" />
            <SignupForm className={classes.signup} />
        </div>
    </>
);

export default Signup;
