import React from 'react'
import styles from './InfoAdicionais.module.css'
import pix from './Union.png' 
import vector from './Vector.png'
import subtract from './Subtract.png'

export default function InfoAdicionais() {
  return ( 
   
   

 
    <section className={styles.section_info}> 
         <h1 className={styles.titulo}>Conheça todas as nossas facilidades</h1>  
    <div className={styles.background}> 


      <div className={styles.card}> 

        <img className={styles.imagem} src={pix}/>
        <div className={styles.texto}>
          <h3 className={styles.subtitulo}>PAGUE PELO PIX</h3>
          <p className={styles.info}>Ganhe 5% OFF em pagamentos via PIX</p>
        </div>


      </div>  

      <div className={styles.card}> 

        <img className={styles.imagem} src={vector}/>
        <div className={styles.texto}>
          <h3 className={styles.subtitulo}>TROCA GRÁTIS</h3>
          <p className={styles.info}>Fique livre para trocar em até 30 dias.</p>
        </div>


      </div>  

      <div className={styles.card}> 

        <img className={styles.imagem} src={subtract}/>
        <div className={styles.texto}>
          <h3 className={styles.subtitulo}>SUSTENTABILIDADE</h3>
          <p className={styles.info}>Moda responsável, que respeita o meio ambiente. </p>
        </div>


      </div> 

      </div>

     
      
        
    </section>
  

        
        
  
    
  )
}
