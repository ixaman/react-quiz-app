import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Quiz from './components/pages/Quiz';
import Result from './components/pages/Result';
import Signup from './components/pages/Signup';
import PrivateRoutes from './components/PrivateRoute';
import PublicRoutes from './components/PublicRoute';
import { AuthProvider } from './context/AuthContext';
import './styles/app.css';

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route element={<PublicRoutes />}>
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                        </Route>
                        <Route element={<PrivateRoutes />}>
                            <Route path="/quiz/:id" element={<Quiz />} />
                            <Route path="/result/:id" element={<Result />} />
                        </Route>
                    </Routes>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
