import PropTypes from 'prop-types';
import classes from './Modal.module.css';  

function Modal({ children, onClose }) {
    return (
    <>
        <div className={classes.backdrop} onClick={onClose} />
        <dialog open className={classes.modal}>
            {children}
            </dialog>
    </>
    );
}

//Added this beacuse I received error
Modal.propTypes = {
    children: PropTypes.node.isRequired
};

export default Modal;