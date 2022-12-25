import defaultImage from '../asset/success.png';
import useFetch from '../hooks/useFetch';
import classes from '../styles/Summary.module.css';

const Summary = ({ score, noq }) => {
    const getKeyword = () => {
        if ((score / (noq * 5)) * 100 < 50) {
            return 'failed';
        }
        if ((score / (noq * 5)) * 100 < 75) {
            return 'good';
        }
        if ((score / (noq * 5)) * 100 < 100) {
            return 'very good';
        }
        return 'excellent';
    };

    const { loading, error, result } = useFetch(
        `https://api.pexels.com/v1/search?query=${getKeyword()}&per_page=1`,
        {
            Authorization: process.env.REACT_APP_PEXEL_API_KEY
        }
    );
    const image = result ? result?.photos[0].src.medium : defaultImage;

    return (
        <div className={classes.summary}>
            <div className={classes.point}>
                {/* <!-- progress bar will be placed here --> */}
                <p className={classes.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>
            {loading && <div className={classes.badge}> Loading... </div>}
            {error && <div className={classes.badge}> There was an error ! </div>}
            {!loading && !error && (
                <div className={classes.badge}>
                    <img src={image} alt="Success" />
                </div>
            )}
        </div>
    );
};

export default Summary;
