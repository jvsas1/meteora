import React, { useState } from 'react'
import styles from './Newsletter.module.css'
import Modal_Letter from './Modal_Letter'
import close from './Modal_Letter/close.png'
import checked from './Modal_Letter/check-circle.png'
import { color } from 'framer-motion'



export default function Newsletter() {


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [Email,setEmail]=useState("")
  const [error, setError] = useState(null); 

  function isValidEmail(email) {
    return /\S+@\S+\S+/.test(email);
  } 


  

  const openModal = (item) => {
     setModalIsOpen(true);
   };
 
   const closeModal = () => {
     setModalIsOpen(false);
   };

   function cadastro_validation(e){

    var valor_input=e.target.value
    setEmail(valor_input) 
    

   }

   function cadastro_submit(e){
    e.preventDefault();

    setError(null);

    if (isValidEmail(Email) && (Email.includes(".com") || Email.includes(".com.br"))) {
      console.log('The email is valid');
      setModalIsOpen(true)
      
      
      
    } else {
      setError('Email is invalid');
    } 
    setEmail("")

    
   }
 


  return (
    <div className={styles.container}> 

        <section className={styles.card}>
            <h3 className={styles.titulo}>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <strong>Cadastre-se!</strong></h3>
      
            <form onSubmit={cadastro_submit} className={styles.box}>
              <input required onChange={cadastro_validation} className={styles.input_text} type='text' placeholder='Digite seu email'  />
              <input type="submit"  className={styles.botao}/>
            
              {error && <h2 style={{color:"red"}}>Email inválido!</h2>}

            </form> 
            
         </section> 

         {modalIsOpen && (
   
                  <Modal_Letter
                  
                  isOpen={modalIsOpen}
                  closeModal={closeModal}> 
                   <div className={styles.container_modal}> 

                    <nav className={styles.nav_modal}>
                      <img src={checked}/>
                      <p>E-mail cadastrado com sucesso!</p>
                      <img src={close} onClick={closeModal}/>
                    </nav>
                      <div className={styles.modal_msg}>
                         <p> Em breve você receberá novidades exclusivas da Meteora.</p>
                      </div>
                   </div>
                  </Modal_Letter> 
                
                  
                  )}
    </div>
  )
}
