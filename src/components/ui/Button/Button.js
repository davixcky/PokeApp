import React from 'react';
import styles from './Button.module.css';
import PropTypes from "prop-types";

const Button = ({src, alt, children, onClick, text}) => {
    return (
        <div className={styles.mainContainer}>
            <button className={styles.centralButton} onClick={onClick}>
                <img src={src} alt={alt} className={styles.buttonImage}/>
                {children}
            </button>
            <h3>{text}</h3>
        </div>
    )
};

Button.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    children: PropTypes.node,
    onClick: PropTypes.func,
    text: PropTypes.string,
}

export default Button;
