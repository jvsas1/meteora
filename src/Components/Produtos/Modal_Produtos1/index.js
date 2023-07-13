import React, { Children } from 'react';
import ReactModal from 'react-modal';
import styles from './Modal_Produtos1.module.css'

const Modal = ({ isOpen, closeModal, children }) => {
  return ( 
  
  <div className={styles.outer_modal}>
    <ReactModal 
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      className={styles.ModalReact}
    > 
     <div className={styles.container}>
      {children}
      </div>
    </ReactModal>
  </div>
  );
};

export default Modal;