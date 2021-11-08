import React from "react";
import styles from './Modal.module.css';
import PropTypes from "prop-types";

const Modal = ({onClose, children}) => {
    return (
        <div className={styles.modalBackground} onClick={onClose}>
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.titleCloseBtn}>
                    <button onClick={onClose}>X</button>
                </div>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default Modal;
