import React, { useState } from 'react'
import styles from './Cabecalho.module.css'
import logo from './Logo desktop.png'

import DropDown from '../Dropdown/DropDown'

export default function Cabecalho() {

  const[menu,setMenu]=useState(false);
  const[search,setSearch]=useState("")

  return ( 
    
    
    <div className={styles.background_nav}>  
    
        <nav className={styles.nav}> 

          <div className={styles.links_nav}>
                <img src={logo} alt="Logo da Meteora"/>
                <a href='#'>Home</a>
                <a href='#'>Nossas lojas</a>
                <a href='#'>Novidades</a>
                <a href='#'>Promoções</a>
                
          </div>  


          
          <div className={styles.nav_mobile}> 
              <div  >
                <img src={logo} alt="Logo da Meteora"/>
                
              </div> 

              <div>
              
             <button className={styles.buscar}href='#'>Buscar</button>
              </div>

          </div> 


         





          <div className={styles.buscar_container}> 
           
            <button className={styles.buscar}href='#'>Buscar</button>

          </div>


        </nav>  

        <div className={styles.nav_mobile}> 
              <div  className={styles.up_nav}>
                <img src={logo} alt="Logo da Meteora"/> 

                <div>
                <DropDown/>

                </div>
         
              </div>  

              

              <div className={styles.search_mobile}>
              
              <button className={styles.buscar}href='#'>Buscar</button>
              </div>

          </div> 


      
    </div>
  )
}
