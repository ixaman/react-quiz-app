import { getDatabase, ref, set } from 'firebase/database';
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import useQuiz from '../../hooks/useQuiz';
import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import ProgressBar from '../ProgressBar';

const initialState = null;

const reducer = (state, action) => {
    switch (action.type) {
        case 'questions':
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    // eslint-disable-next-line no-param-reassign
                    option.checked = false;
                });
            });
            return action.value;
        case 'answers':
            // eslint-disable-next-line no-case-declarations
            const questions = _.cloneDeep(state);
            questions[action.questionId].options[action.optionIndex].checked = action.value;
            return questions;

        default:
            return state;
    }
};

const Quiz = () => {
    const { id } = useParams();
    const { loading, error, quiz } = useQuiz(id);
    const [qna, dispatch] = useReducer(reducer, initialState);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);
    const videoTitle = location.state?.videoTitle;

    useEffect(() => {
        dispatch({
            type: 'questions',
            value: quiz
        });
    }, [quiz]);

    const handleCheckChange = (e, index) => {
        dispatch({
            type: 'answers',
            questionId: currentQuestion,
            optionIndex: index,
            value: e.target.checked
        });
    };

    // calculate progress
    const percantage = quiz.length > 0 ? ((currentQuestion + 1) / quiz.length) * 100 : 0;

    // handle next button
    const handleNext = () => {
        if (currentQuestion + 1 < quiz.length) {
            setCurrentQuestion((prevCurr) => prevCurr + 1);
        }
    };
    // handle prev button
    const handlePrev = () => {
        if (currentQuestion >= 1 && currentQuestion <= quiz.length) {
            setCurrentQuestion((prevCurr) => prevCurr - 1);
        }
    };

    async function handleSubmit() {
        const { uid } = currentUser;
        const db = getDatabase();
        const resultRef = ref(db, `/result/${uid}`);
        await set(resultRef, {
            [id]: qna
        });

        // relocate to new path
        navigate(`/result/${id}`, { state: { qna } });
    }
    return (
        <>
            {loading && <div> Loading...</div>}
            {error && <div> There was an error!</div>}
            {!loading && !error && qna && qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestion].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers
                        options={qna[currentQuestion].options}
                        handleChange={handleCheckChange}
                        input
                    />
                    <ProgressBar
                        handleNextChange={handleNext}
                        handlePrevChange={handlePrev}
                        progress={percantage}
                        submit={handleSubmit}
                    />
                    <MiniPlayer videoId={id} title={videoTitle} />
                </>
            )}
        </>
    );
};
export default Quiz;
