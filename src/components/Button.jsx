import classes from '../styles/Button.module.css';

const Button = ({ className, children, ...rest }) => (
    // eslint-disable-next-line react/button-has-type
    <button className={`${classes.button} ${className}`} {...rest}>
        {children}
    </button>
);

export default Button;
