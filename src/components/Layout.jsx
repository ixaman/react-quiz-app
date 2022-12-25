import classes from '../styles/Layout.module.css';
import Nav from './Nav';

const Layout = ({ children }) => (
    <>
        <Nav />
        <main className={classes.main}>
            <div className={classes.container}> {children}</div>
        </main>
    </>
);

export default Layout;
