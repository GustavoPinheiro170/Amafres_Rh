import React from 'react';
import HeaderTitlePrint from '../../../Head/Prints';
import MapContato from './MapContato';
import styles from './Contatos.module.css';
import { FaHome, FaLink, FaPhone} from 'react-icons/fa';
import Amafresp from '../../../../Assets/amafresp.jpg'
import Ans from '../../../../Assets/ANS.jpg'

const Contatos = () => {

    
    return  <div className='animeLeft container-internal'>
        <HeaderTitlePrint title='Contatos' />

        <MapContato />
        
        <div className={styles.container_contatos}>
            
        <div className={styles.internal}>
        <img src={Amafresp} alt='amafresp' width='200px' />
        <p><FaHome /> Av. Brigadeiro Luís Antônio, 4843 - Jardim Paulista, São Paulo - SP</p>
        <p><FaPhone /> (11) 3886-8800</p>
        <p><FaLink/> <a target='_blank' rel='noopener noreferrer' href='https://amafresp.org.br' >amafresp.org.br</a></p>
        </div>

        <div className={styles.internal}>
        <img src={Ans} alt='ANS' width='150px'/>
        <p><FaPhone /> (11) 3886-8800</p>
        <p><FaLink/> <a target='_blank' rel='noopener noreferrer' href='https://ans.gov.br' >ans.gov.br</a></p>
        </div>
        </div>
       
      </div>

}

export default Contatos;
