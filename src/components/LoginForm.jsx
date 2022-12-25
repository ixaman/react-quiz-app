import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const { login } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            await login(email, password);
            history.push('/');
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <Form style={{ height: '330px' }} onSubmit={handleSubmit}>
            <TextInput
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter email"
                icon="alternate_email"
            />
            <TextInput
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter password"
                icon="lock"
            />
            <Button type="submit">
                <span>Submit now</span>
            </Button>
            {error && <p className="error">{error}</p>}
            <div className="info">
                Do not have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    );
};

export default LoginForm;
