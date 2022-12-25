import classes from '../styles/Video.module.css';

const Video = ({ title, noq, id }) => (
    <div className={classes.video}>
        <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="" />
        <p>{title}</p>
        <div className={classes.qmeta}>
            <p>{noq} Questions</p>
            <p>Total Score : {noq * 5}</p>
        </div>
    </div>
);

export default Video;
