import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

const SignupForm = ({ className }) => {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [agree, setAgree] = useState('');

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { signup } = useAuth();
    const history = useHistory();

    console.log(userName);
    // eslint-disable-next-line consistent-return
    async function handleSubmit(e) {
        e.preventDefault();
        // do validation
        if (password !== confirmPass) {
            return setError('Password did not match!');
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password, userName);
            history.push('/');
        } catch (err) {
            console.log(err);
            setError(err.message);
            setLoading(false);
        }
    }

    return (
        <Form className={className} onSubmit={handleSubmit}>
            <TextInput
                required
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter name"
                icon="person"
            />
            <br />
            <TextInput
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter email"
                icon="alternate_email"
            />
            <br />
            <TextInput
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                icon="lock"
            />
            <br />
            <TextInput
                required
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                type="password"
                placeholder="Confirm password"
                icon="lock_clock"
            />
            <br />
            <Checkbox
                required
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
                text="I agree to the Terms & Conditions"
            />
            <br />
            <br />
            <Button disabled={loading} type="submit">
                <span>Submit now</span>
            </Button>
            {error && <p className="error">{error}</p>}
            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
};

export default SignupForm;
