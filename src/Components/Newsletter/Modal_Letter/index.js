import ReactModal from 'react-modal'; 
import styles from './Modal_Letter.module.css'

const Modal_Letter = ({ isOpen, closeModal, children }) => {
  return (
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      className={styles.modal_container}
      
    > 
     <div >
      {children}
      </div>
    </ReactModal>
  );
};

export default Modal_Letter;