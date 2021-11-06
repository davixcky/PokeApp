import React from "react";
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ children, style }) => {
    return (
       <div className={styles.container} style={style}>
           {children}
       </div>
    )
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.object,
};

export default Card;