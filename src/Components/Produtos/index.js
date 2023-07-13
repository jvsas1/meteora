import React, { useState } from 'react'
import { produtos1 } from './produtos1'
import { produtos2 } from './produtos2'
import { produtos } from './produtos'
import checked from './Modal_Produtos1/check-circle.png'
import close from './Modal_Produtos1/close-icon.png'
import Camisetas from './categorias/Camiseta.png'
import Bolsas from './categorias/Bolsas.png'
import Calçados from './categorias/Calçados.png'
import Calças from './categorias/Calças.png'
import Oculos from './categorias/Óculos.png'
import Casacos from './categorias/Casacos.png'




import styles from './Produtos.module.css'
import Modal from './Modal_Produtos1';


export default function Produtos() { 


   
   const[search,setSearch]=useState("")
   const[data1,setData1]=useState(produtos1)
   const[data2,setData2]=useState(produtos2)
   const[data3,setData3]=useState(produtos)

   const filtrar=(elemento)=>{
      const resultado1 = produtos1.filter((dado)=>{
         return dado.categoria===elemento;
      }); 
      setData1(resultado1)

      const resultado2 = produtos2.filter((dado)=>{
         return dado.categoria===elemento;
      });
      setData2(resultado2) 

      const resultado3 =produtos.filter((dado)=>{
         return dado.categoria===elemento;
      });
      setData3(resultado3)
      
   }
  
   function noFilter(){
      setData1(produtos1);
      setData2(produtos2)
      setData3(produtos);
   }

   

   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [selectedElement, setSelectedElement] = useState(null);

   const openModal = (item) => {
      setSelectedElement(item);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  


  return (
    
    
    
    
    
    
    <div className={styles.container_geral_produtos}> 

        

         <div className={styles.container_categorias}> 

            <h1    className={styles.titulo}>Busque por categoria:</h1> 
            <p className={styles.unfilter} onClick={noFilter}>Todos</p>
            <section className={styles.itens_container}>

            <div className={styles.card}>             

            <img className={styles.roupa_card} src={Camisetas}/> 
            <p onClick={()=>filtrar("Camisetas")} className={styles.nome_roupa}>Camisetas</p> 
             

            </div> 

             <div className={styles.card}>             

            <img className={styles.roupa_card} src={Bolsas}/> 
            <p  onClick={()=>filtrar("Bolsas")} className={styles.nome_roupa}>Bolsas</p> 
             

            </div> 


             <div className={styles.card}>             

            <img className={styles.roupa_card} src={Calçados}/> 
            <p  onClick={()=>filtrar("Calçados")} className={styles.nome_roupa}>Calçados</p> 
             

            </div>

             <div className={styles.card}>             

            <img className={styles.roupa_card} src={Calças}/> 
            <p   onClick={()=>filtrar("Calças")} className={styles.nome_roupa}>Calças</p> 
             

            </div> 

             
            <div className={styles.card}>             

            <img className={styles.roupa_card} src={Casacos}/> 
            <p  onClick={()=>filtrar("Casacos")} className={styles.nome_roupa}>Casacos</p> 
             

            </div> 


             <div className={styles.card}>             

            <img className={styles.roupa_card} src={Oculos}/> 
            <p  onClick={()=>filtrar("Óculos")} className={styles.nome_roupa}>Óculos</p> 
             

            </div>
  
  
  
  
</section>
</div>




    <input  className={styles.input_buscar}onChange={(e)=>{setSearch(e.target.value)}} type="text"/> 

      <h1 className={styles.produtos_t1}>Produtos que estão bombando!</h1> 
        
      <section className={styles.produtos_container}>
             {data1.filter((item)=>{
                  if(search==""){
                     return item;
                  }else if(item.nome.toLowerCase().includes(search)){
                     return item;
                  }

             }).map(item=>{
                return(

                 <div  key={item.nome} className={styles.produtos_card}>

                    <img className={styles.produtos_imagem} src={item.img}/>
                   
                    <div className={styles.card_text}>
                       <h3 className={styles.titulo_produto}>{item.nome}</h3>
                        <p className={styles.descricao}>{item.descricao}</p>
                        <h2 className={styles.preco}>{item.preco}</h2>
                      
                      <div> 
                      <button onClick={() => openModal(item)} className={styles.vermais}>Ver mais </button> 
                 
                  
                      </div>  

                   
                    </div>
                   
                  
                    
  
                 </div>
                
                )
             })} 

          
            
            
          
                 

        </section> 
      
        

        
        <section className={styles.produtos_container}>
             {data2.filter((item)=>{
                  if(search==""){
                     return item;
                  }else if(item.nome.toLowerCase().includes(search)){
                     return item;
                  }

             }).map(item=>{
                return(
                 <div key={item.nome} className={styles.produtos_card}>
                    <img className={styles.produtos_imagem} src={item.img}/>
                   
                    <div className={styles.card_text}>
                    <h3 className={styles.titulo_produto}>{item.nome}</h3>
                        <p className={styles.descricao}>{item.descricao}</p>
                        <h2>{item.preco}</h2> 
                        <button onClick={() => openModal(item)} className={styles.vermais}>Ver mais</button>
                    </div>
                     
                   
                    
                    
                 </div>
                
                )
             })}

       


        </section> 

        <section className={styles.produtos_container1}>
        {data3.filter((item)=>{
                  if(search==""){
                     return item;
                  }else if(item.nome.toLowerCase().includes(search)){
                     return item;
                  }

             }).map(item=>{
                return(
                 <div key={item.nome} className={styles.produtos_card}>
                    <img className={styles.produtos_imagem} src={item.img}/>
                   
                    <div className={styles.card_text}>
                    <h3 className={styles.titulo_produto}>{item.nome}</h3>
                        <p className={styles.descricao}>{item.descricao}</p>
                        <h2>{item.preco}</h2> 
                        <button onClick={() => openModal(item)} className={styles.vermais}>Ver mais</button>
                    </div>
                     
                   
                    
                    
                 </div>
                
                )
             })}


               {modalIsOpen && (
                  <Modal
                  isOpen={modalIsOpen}
                  closeModal={closeModal}> 
                  <div className={styles.modal_container}>
                    
                     <nav className={styles.checked}>
                       <img src={checked}/>
                       <p className={styles.modal_header}>Confira detalhes sobre o produto</p>
                       <img onClick={closeModal} src={close}/>
                     
                     </nav> 
                    
                     <div className={styles.card_modal}>
                           <div>
                           <img className={styles.img_modal} src={selectedElement.img}/>
                           </div>
                        <div className={styles.card_modal_container}>
                           <div className={styles.infos_modal}>
                              <h3 className={styles.titulo_modal}>{selectedElement.nome}</h3>
                              <p className={styles.descricao_modal}>{selectedElement.descricao}</p>
                              <div className={styles.linha_modal}></div>
                              <h3 className={styles.preco_modal}>{selectedElement.preco}</h3>
                              <p className={styles.descricao2_modal}>Vendido e entregue por Riachuelo</p>
                              
                         </div>    

                         <div className={styles.card_modal_container}>


                           <div className={styles.infos_modal2}> 
                              <div className={styles.linha_modal2}></div>
                                 <h3 className={styles.titulo_modal2}>Cores</h3>
                              <div  className={styles.inputs_card_cores}>
                              
                              <div className={styles.cores_opcoes}> 

                                 <label className="checkbox">
                                 <input  name="input"className={styles.input_azul} type='radio'/> 
                                    
                                    <span className={styles.checkmark1} checked="checked"></span>
                                 </label> 
                                 
                                 <p className={styles.cor_input1}>Azul claro</p>
                              </div> 

                                 <div  className={styles.cores_opcoes} > 
                                 <label className="checkbox"> 
                                    <input name="input" className={styles.input_branco}  type='radio' />
                                    <span className={styles.checkmark2}></span>
                                 </label>
                                    <p className={styles.cor_input1}>Offwhite</p>
                                 </div> 

                                 <div  className={styles.cores_opcoes}>  
                                 <label className="checkbox"> 
                                    <input name="input" className={styles.input_preto} type='radio' />
                                    <span className={styles.checkmark3}></span>
                                 </label>
                                    <p className={styles.cor_input1}>Preto</p>
                                 </div> 
                           </div>
                              <div className={styles.linha_modal2}></div>                           
                         </div>  
                        </div>  

                        <div className={styles.card_modal_container}> 
                        
                           <div className={styles.infos_modal}> 

                          
                              <h3 className={styles.titulo_modal3}>Tamanho:</h3>
                           <div  className={styles.inputs_card_cores}>
                           
                           <div className={styles.cores_opcoes}>
                              <label className="checkbox"> 
                                    <input name="input2" className={styles.input_branco} type='radio' />
                                    <span className={styles.checkmark2}></span>
                                 </label>
                              <p className={styles.cor_input2}>P</p>
                           </div> 

                           <div  className={styles.cores_opcoes} > 
                                  <label className="checkbox"> 
                                    <input name="input2" className={styles.input_branco}  type='radio' />
                                    <span className={styles.checkmark2}></span>
                                 </label>
                              <p className={styles.cor_input2}>PP</p>
                           </div> 

                           <div  className={styles.cores_opcoes}> 
                           <label className="checkbox"> 
                                    <input name="input2" className={styles.input_branco}  type='radio' />
                                    <span className={styles.checkmark2}></span>
                                 </label>
                              <p className={styles.cor_input2}>M</p>
                           </div>  

                           <div  className={styles.cores_opcoes}> 
                           <label className="checkbox"> 
                                    <input name="input2" className={styles.input_branco}  type='radio' />
                                    <span className={styles.checkmark2}></span>
                                 </label>
                              <p className={styles.cor_input2}>G</p>
                           </div> 

                           <div  className={styles.cores_opcoes}> 
                           <label className="checkbox"> 
                                    <input name="input2" className={styles.input_branco}  type='radio' />
                                    <span className={styles.checkmark2}></span>
                                 </label>
                              <p className={styles.cor_input2}>GG</p>
                           </div>

                           </div>
                          
                          <button className={styles.botao_add}>Adicionar à sacola</button>

                           
                              
                              
                         </div>   
                        </div>  
                        
                        </div>  
                        

                        

                        
                     </div>
                       
                     
                  </div> 


                  </Modal>
            )  } 
             
        </section> 




    </div>
  )
}
