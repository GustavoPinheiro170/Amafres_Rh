import React from 'react';
import {FaPhone} from 'react-icons/fa';
import { UserContext } from '../../../../UserContext';
import styles from './Credenciados.module.css';
import Spinner from '../../../../Assets/Spinner.gif';


const UniqueFilter = () =>  {

const { uniqueFilter, ChangeInfo, loading}= React.useContext(UserContext)


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


return (  

<div className={`${styles.container_result} animeLeft`}>
    {loading ? <img src={Spinner} alt='loading' />: null}

    <h2 className={`${styles.spanInfo} title_small`}>Informações</h2>
    
    <span onClick={ChangeInfo } >x</span>

        { uniqueFilter ?  uniqueFilter.map(  (filter, index) =>  { 
        
        return <div key={index} className={styles.container_filters} >
         <div className={styles.resultsFilter}>
         <h2>{filter.nomeFantasia}</h2>
              
              <div className={styles.especialidades}>
              {filter.especialidades.map( (esp, index) =>  {
                  return <p  key={index}> {esp.especialidade} <strong> | </strong>  </p>
              })}
              </div>
              <hr />
             
              <h3>{filter.endereco}</h3>
              <p>Bairro: <strong>{filter.bairro}</strong></p>
              <p>Cidade/UF: <strong>{filter.cidade}/{filter.UF}</strong></p>
              <div className={styles.qualificacoes}>
              <h4>Qualificações</h4>
              { 
                filter.qualificacoes ? filter.qualificacoes.map((ql, index) =>  {
                return (
                    <>
                    <p key={index}>{ql.codigo}</p>
                    </>
                )
            }  
              ) : null }
              </div>

              <div className={styles.infoGerais}>
                <h4>Informações Gerais: </h4>
                <p>Prestador : {filter.tipoPrestador}</p>
                <p>CEP : {filter.CEP}</p>
                <p>CPNJ / CPF : {filter.CNPJCPF}</p>
                <p>Prestador : {filter.tipoPrestador}</p>
                <p>Razão Social : {filter.razaoSocial}</p>
            </div>
            </div>
            <div className={styles.resultsFilterNumber}>
    
              {filter.telefones.map((tel, index) =>  {
                return <h3 key={index} ><FaPhone /> {ReplacePhone(tel.telefone)}</h3>
              })}
        </div> 
    </div>  } ) : null } 
  </div>      
        
)}



export default UniqueFilter;
