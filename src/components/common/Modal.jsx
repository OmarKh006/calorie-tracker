import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

function Overlay({ isOpen, onRequestClose, children }) {
  return (
    isOpen && (
      <div className={styles.overlay} onClick={onRequestClose}>
        <div className={styles.content}>{children}</div>
      </div>
    )
  );
}

function Modal(props) {
  return ReactDOM.createPortal(<Overlay {...props} />, document.body);
}

export default Modal;
