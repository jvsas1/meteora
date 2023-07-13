import React, { useState } from 'react';
import selector from './menu_icon.png'
import styles from './DropDown.module.css'
import fechar from './marca-cruzada 1.png'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container_lista}>
      <img src={selector } onClick={toggleMenu}/>

      {isOpen && (
        <ul className={styles.lista}> 
          <img className={styles.fechar} onClick={closeMenu}src={fechar}/>
          <div>
          <li >Home</li>
          <p className={styles.line}>_____________</p>
          </div> 

          <div>
          <li>Nossas lojas</li> 
          <p className={styles.line}>_____________</p>
          </div>
          
          <div>
          <li>Novidades</li>
          <p className={styles.line}>_____________</p>
          </div>
          
          <li>Promoções</li>
         
          
         
        </ul>
      )}

      {/* Evento de clique no documento para fechar o menu */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

export default DropdownMenu;