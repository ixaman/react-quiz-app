import classes from '../styles/Form.module.css';

const Form = ({ children, className, ...rest }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <form className={`${className} ${classes.form}`} action="#" {...rest}>
        {children}
    </form>
);

export default Form;
