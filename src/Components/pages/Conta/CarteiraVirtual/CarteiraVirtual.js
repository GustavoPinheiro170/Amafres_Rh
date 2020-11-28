import React from 'react';
import styles from './Carteira.module.css';
import HeaderTitlePrint from '../../../Head/Prints';
import { UserContext } from '../../../../UserContext';
import { formatCPFCard, formatNascimento , formatAdesao} from '../../../../Hooks/dataFormat';

const ref = React.createRef();

const CarteiraVirtual = () => {
  
  const {dados, carteira,  dadosDependente, getCarteirinha, navigate, loading} = React.useContext(UserContext);

    const [tipo, setTipo] = React.useState(false);

    const cpf = formatCPFCard(carteira);
    const nascimento = formatNascimento(carteira);
    const adesao = formatAdesao(carteira);

    
    function changeCard(codigo){ if(dadosDependente) getCarteirinha(codigo) }

    const  Beneficiarios = () => {
      return (
        <select name='beneficiario' onChange={(e) => {changeCard(e.target.value)}}>
            <option>SELECIONE O BENEFICIÁRIO</option>
        {dadosDependente ? dadosDependente.map((dependente, index) =>  {
          return <option key={index} value={dependente.codigo}> {dependente.nome} </option>
       }): null }
      </select>
      )
    }

    React.useEffect(() => {
   
      const codigo = localStorage.getItem('id');
      
      if(!tipo)  getCarteirinha(codigo);
        
      function HandleType() {
        try {
          if(dados)
          if(dados.tipo && dados.tipo === 'T') return setTipo(true);
          else navigate('/Conta')
        }catch (err) {
          setTipo(false);
        }  
      }
      HandleType();

    },[setTipo, tipo, getCarteirinha, dados, navigate]);



        return (
    
            <div className=' animeLeft container-internal'>
            <span className={styles.modal}></span>
          
        <HeaderTitlePrint title='Carteirinha Virtual' reference={ref} filename='Carteirinha' />

        {loading ? <h4>Carregando...</h4> : null}
          <div className={`${styles.carteiraVirtual} animeLeft`} >      
           <div ref={ref} className={styles.gridCard}>       
              <div className={styles.carteira}>
                            <div className={styles.contentCarteira}>
                                <p><strong>{carteira && carteira.nome}</strong></p>
                                
                               <div className={styles.contentDados}>
                                 <p><strong>CPF:</strong>{cpf && cpf}</p>
                                 <p><strong>Dt Nasc:</strong>{nascimento && nascimento}</p>
                                 <p><strong>CNS:</strong> {carteira && carteira.cns}</p>
                                 <p><strong>Adesão:</strong> {adesao && adesao}</p>
                                </div>
                                <div className={styles.contentDados}>
                                  <p><strong>Acomodação: </strong>{carteira && carteira.acomodacao}</p>
                                  <p><strong>Contrato: </strong>{carteira && carteira.contrato}</p>
                                  <p><strong>Abrangência:</strong>{carteira && carteira.abrangencia}</p>
                                  <p><strong>Carência:  </strong> {carteira && carteira.carencia}</p>
                                </div>
                                <div className={styles.contentDados}>
                                  <p style={{fontSize: '13px'}}><strong>Segmentação: </strong>{carteira && carteira.segmentacao}</p>

                                </div>
                              </div>
                 </div>
            
                <div className={styles.carteiraVerso}>
                 <p style={{fontSize: '13px'  , marginTop: '10%', textAlign: 'center'}}>Obrigatório a apresentação do documento de identidade</p>
                        <div className={styles.contentCarteiraVerso}>
                            <p>409829993<strong>Plano de Saúde</strong></p>
                            <p>{adesao && adesao} <strong>Início do Plano</strong></p>
                            <p>AMAFRESP<strong>Nome Fantasia</strong></p>
                        </div>
                        <p style={{fontSize: '10px' , textAlign: 'center', fontWeight: 'bold'}}>CONVÊNIO DE RECIPROCIDADE COM OUTROS ESTADOS URGÊNCIA/EMERGÊNCIA</p>
                        <div className={styles.internal_convenio}>
                        <div className={styles.contentCarteiraVerso} style={{marginTop: '5px'}}>
                            <div>
                              <p>ASFAL (AL)</p>
                              <p>AFFEAM (AM)</p>
                              <p>ASFEB (BA)</p>
                              <p>CAFAZ (CE)</p>
                            </div>
                            <div>
                             <p>AFFEGO (GO)</p>  
                             <p>FUNDAPFEMG (MG)</p>  
                             <p>ASPARÁ (PA)</p>  
                             <p>AFRAFEP (PB)</p>  
                            </div>
                            <div>
                              <p>FISCO SAÚDE (PE)</p>  
                              <p>AMAFRERJ (RJ)</p>  
                              <p>AFISVEC (RS)</p>  
                              <p>CASSIND (SE)</p> 
                            </div>
                          </div>
                        </div>
                    <div className={styles.informacao_emergencial}>
                      <div>
                        <p><strong>Central Amafresp de Emergência : 0800 173017</strong></p>
                        <p>Disque ANS 0800 7019656 | www.ans.gov.br </p>
                      </div>

                     </div>
                  </div>
                 </div>
               
                 {tipo && <Beneficiarios />}
             
              </div>
            </div>
        )

}

export default CarteiraVirtual;