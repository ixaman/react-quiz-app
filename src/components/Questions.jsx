import classes from '../styles/Question.module.css';
import Answers from './Answers';

const Questions = ({ answers = [] }) =>
    answers.map((answer, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={classes.question} key={index}>
            <div className={classes.qtitle}>
                <span className="material-icons-outlined"> help_outline </span>
                {answer.title}
            </div>
            <Answers input={false} options={answer.options} />
        </div>
    ));

export default Questions;
