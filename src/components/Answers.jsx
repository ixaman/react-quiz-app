import classes from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

const Answers = ({ options = [], handleChange, input }) => (
    <div className={classes.answers}>
        {options &&
            options.map((option, index) =>
                input ? (
                    <Checkbox
                        className={classes.answer}
                        text={option.title}
                        onChange={(e) => handleChange(e, index)}
                        value={index}
                        checked={option.checked}
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                    />
                ) : (
                    <Checkbox
                        className={`${classes.answer} ${
                            // eslint-disable-next-line no-nested-ternary
                            option.correct ? classes.correct : option.checked ? classes.wrong : null
                        }`}
                        text={option.title}
                        defaultChecked={option.checked}
                        disabled
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                    />
                )
            )}
    </div>
);

export default Answers;
