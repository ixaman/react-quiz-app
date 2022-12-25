import { Link } from 'react-router-dom';
import logo from '../asset/logo-bg.png';
import classes from '../styles/Nav.module.css';
import Account from './Account';

const Nav = () => (
    <nav className={classes.nav}>
        <ul>
            <li>
                <Link to="/" className={classes.brand}>
                    <img src={logo} alt="Learn with Sumit Logo" />
                    <h3>Learn with Asad</h3>
                </Link>
            </li>
        </ul>
        <Account />
    </nav>
);

export default Nav;
