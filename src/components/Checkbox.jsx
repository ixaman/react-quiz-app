const Checkbox = ({ className, text, ...rest }) => (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className={className}>
        <input type="checkbox" {...rest} />
        <span> {text}</span>
    </label>
);

export default Checkbox;
