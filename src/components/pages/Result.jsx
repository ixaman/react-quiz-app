import { isEqual } from 'lodash';
import { useLocation, useParams } from 'react-router-dom';
import useAnswers from '../../hooks/useAnswers';
import Analysis from '../Analysis';
import Summary from '../Summary';

const Result = () => {
    const { id } = useParams();
    const location = useLocation();
    const { state } = location;
    const { qna } = state;
    const { loading, error, answers } = useAnswers(id);

    // calculate score
    function calculateScore() {
        let score = 0;

        answers.forEach((question, index1) => {
            const correctAnswers = [];
            const checkedAnswers = [];

            question.options.forEach((option, index2) => {
                if (option.correct) correctAnswers.push(index2);
                if (qna[index1].options[index2].checked) {
                    checkedAnswers.push(index2);
                    // eslint-disable-next-line no-param-reassign
                    option.checked = true;
                }
            });
            if (isEqual(correctAnswers, checkedAnswers)) {
                score += 5;
            }
        });
        return score;
    }

    const calculatedScore = calculateScore();

    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>There was an error !</div>}
            {answers && answers.length > 0 && (
                <>
                    <Summary score={calculatedScore} noq={answers.length} />
                    <Analysis answers={answers} />
                </>
            )}
        </>
    );
};

export default Result;
