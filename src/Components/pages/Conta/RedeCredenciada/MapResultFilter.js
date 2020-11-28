import React from 'react';
import {FaPhone} from 'react-icons/fa';
import { UserContext } from '../../../../UserContext';
import styles from './Credenciados.module.css';
import Spinner from '../../../../Assets/Spinner.gif';
import SearchingGif from '../../../../Assets/serachgif.gif'


const MapResultFilter = () =>  {

const { resultados, error,  loading, getUniqueFilter ,info }= React.useContext(UserContext)
const [ searching, setSeraching] =  React.useState(false)

 function ReplacePhone(tel){
  if(tel !== null) {
  tel=tel.replace(/\D/g,"");            
  tel=tel.replace(/^(\d{2})(\d)/g,"($1) $2"); 
  tel=tel.replace(/(\d)(\d{4})$/,"$1-$2");  
  return tel;
}else {
  tel = 0;

  }
}

React.useEffect(() =>  {
  if(!resultados) {
    setSeraching(true)
   }else {
   setSeraching(false)
   }
}, [setSeraching, info, resultados])

    return (
   <>

    <div className={styles.container_result}>
        <h2 className='title_small'>Resultados</h2>
             {searching ? <> 
            
             <div className={styles.searchingLoad}>
                <img src={SearchingGif} alt='Search' />
                <h4 >Preencha a cidade e município para realizar a busca.</h4>
              </div> 
             
             </> : null }
             
             {error ? <h4 style={{textAlign:'center' , color:'red'}}>{error}</h4> : null }
             
             {loading ? <img  className={styles.loadingSpinner} height='100px' src={Spinner} alt={Spinner} /> :  null  }
             

        {resultados ? resultados.map((resultados, index) =>  { 
            return (
        <div key={index} className={styles.container_filters} >
                <div className={styles.resultsFilter}>
              
              <h2>{resultados.nomeFantasia}</h2>
              <div className={styles.especialidades}>
              {resultados.especialidades.map( (esp, index) =>  {
                  return <p  key={index}> {esp.especialidade} <strong> | </strong>  </p>
              })}
              </div>
              <hr />
             
              <h3>{resultados.endereco}</h3>
              <p>Bairro:<strong>{resultados.bairro}</strong></p>
              <p>Cidade/UF:<strong>{resultados.cidade}/{resultados.UF}</strong></p>
              <hr/>
              

            </div>
            <div className={styles.resultsFilterNumber}>
 
              {resultados.telefones.map((tel, index) =>  {
                return <h3 key={index} ><FaPhone /> {
                  ReplacePhone(tel.telefone)}</h3>
              })}
         
           
                <div className={styles.buttonInfo}>
                  <button
                  onClick={() => getUniqueFilter(
                    resultados.razaoSocial,
                    resultados.idCidade 
                    ) }
                  >MAIS INFORMAÇÕES</button>
                </div>
            </div>
         </div>
        )
        })
        
: null
    }
  
      </div>
</>
  );
}

export default MapResultFilter;
