import React from 'react';
import styles from './Carteira.module.css';
import HeaderTitlePrint from '../../../Head/Prints';
import { UserContext } from '../../../../UserContext';
import { formatCPF, formatNascimento } from '../../../../Hooks/dataFormat';

const ref = React.createRef();

const CarteiraVirtual = () => {

    const {dados} = React.useContext(UserContext);
    const cpf = formatCPF(dados);
    const nascimento = formatNascimento(dados);

        return (
    
            <div ref={ref} className='container-internal'>
             <span className={styles.modal}></span>
                <HeaderTitlePrint title='Carteirinha Virtual' reference={ref} filename='Carteirinha' />
                <div className={`${styles.carteiraVirtual} animeLeft`}>
                <div className={styles.gridCard}>
                    <div className={styles.carteira}>
                
                        <div className={styles.contentCarteira}>
                         <p><strong>{dados.nome}</strong></p>

                             <div className={styles.contentDados}>
                              <p><strong>CPF:</strong>{cpf}</p>
                              <p><strong>Dt Nasc:</strong>{nascimento}</p>
                             <p><strong>CNB:</strong> {dados.CNS}</p>
                             <p><strong>Adesão:</strong> 27/06/1996</p>
                             </div>
                    
                              <div className={styles.contentDados}>
                              <p><strong>Acomodação: </strong>Enfermaria</p>
                              <p><strong>Contrato: </strong>Coletivo</p>
                              <p><strong>Abrangência:</strong> São Paulo</p>
                              <p><strong>Cobrança:  </strong> Isento</p>
                              </div>
                              </div>
                 </div>

                <div className={styles.carteiraVerso}>
                <p style={{marginTop: '10%', textAlign: 'center'}}><strong>{dados.nome}</strong></p>
                <div className={styles.contentCarteiraVerso}>
                <p>CPF: {cpf}</p>
                <p>Nasc:{nascimento}</p>
                </div>
                     </div>
                 </div>
                </div>
            </div>
        )

}

export default CarteiraVirtual;