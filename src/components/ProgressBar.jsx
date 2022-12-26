import { useRef, useState } from 'react';
import classes from '../styles/ProgressBar.module.css';
import Button from './Button';

const ProgressBar = ({ handleNextChange, handlePrevChange, progress, submit }) => {
    const [tooltip, setTooltip] = useState(false);
    const tooltipRef = useRef();

    function toggleTooltip() {
        if (tooltip) {
            setTooltip(false);
            tooltipRef.current.style.display = 'none';
        } else {
            setTooltip(true);
            tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
            tooltipRef.current.style.display = 'block';
        }
    }

    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={handlePrevChange}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip} ref={tooltipRef}>
                    {progress}% Cimplete!
                </div>
                <div className={classes.rangeBody}>
                    <div
                        className={classes.progress}
                        style={{ width: `${progress}%` }}
                        onMouseOver={toggleTooltip}
                        onMouseOut={toggleTooltip}
                    />
                </div>
            </div>
            <Button className={classes.next} onClick={progress === 100 ? submit : handleNextChange}>
                <span>{progress === 100 ? 'Submit' : 'Next Question'}</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
};

export default ProgressBar;
