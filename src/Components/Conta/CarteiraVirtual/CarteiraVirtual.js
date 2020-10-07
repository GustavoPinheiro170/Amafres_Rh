import React from 'react';
import styles from './Carteira.module.css';
import HeaderTitlePrint from '../../Head/Prints';

const ref = React.createRef();


export default class CarteiraVirtual  extends React.Component {

    render(){
        return (
            <>
            <div ref={ref}>
             <span className={styles.modal}></span>
            <HeaderTitlePrint title='Carteirinha Virtual' reference={ref} filename='Carteirinha' />
            <div className={`${styles.carteiraVirtual} animeLeft`}>
            <div className={styles.gridCard}>
                <div className={styles.carteira}>
                <div className={styles.contentCarteira}>
                    <p><strong>José Oliveira Campos</strong></p>
                    <div className={styles.contentDados}>
                    <p><strong>CPF:</strong> 999.999.999-99</p>
                    <p><strong>Dt Nasc:</strong> 27/06/1996</p>
                    <p><strong>CNB:</strong> 7005045908002459</p>
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
                <p style={{marginTop: '10%', textAlign: 'center'}}><strong>Gustavo Pinheiro Campos</strong></p>
                <div className={styles.contentCarteiraVerso}>
                <p>CPF: 999.9999.999-99</p>
                <p>Dt Nasc: 27-06-1996</p>
                </div>
                     </div>
                 </div>
                </div>
            </div>

            </>
        );
    }
}

