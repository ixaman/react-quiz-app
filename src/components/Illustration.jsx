import React from 'react';
import classes from '../styles/Illustration.module.css';

const Illustration = ({ src, alt }) => (
    <div className={classes.illustration}>
        <img src={src} alt={alt} />
    </div>
);

export default Illustration;
