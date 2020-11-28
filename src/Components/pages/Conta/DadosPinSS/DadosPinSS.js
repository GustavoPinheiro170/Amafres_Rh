
import React from 'react';
import styles from '../MeusDados/MeusDados.module.css';

import {formatNascimento, formatCPF} from '../../../../Hooks/dataFormat';

import { UserContext } from '../../../../UserContext';
import Input from '../../../Form/Input';
import DadosdoPlano from './DadosdoPlano';


const DadosPinSS = () =>  {

    const {dados} = React.useContext(UserContext);
    const dtNascimento = formatNascimento(dados);
    const cpf = formatCPF(dados);


    const  HandleChange = ({target}) =>  {
        return  target.value
     }
 
return (  

     <div className='animeLeft container-internal'>
        <h4 className='title_small'>Dados Cadastrais PIN-SS</h4>
        <div className={styles.col6} >
        <Input 
        type='text'  
        label='Nome Completo' 
        name='NomeCompleto' 
        value={dados && dados.nome} 
        onChange={HandleChange} 
        />

        <Input 
        type='text'  
        label='CNS' 
        name='CNS' 
        value={dados && dados.CNS} 
        onChange={HandleChange} 
        />

        </div>
        <div className={styles.col6} >
        <Input 
        type='text'  
        label='Data de Nascimento' 
        name='dtNascimento' 
        value={dados && dtNascimento} 
        onChange={HandleChange} 
        />

        <Input 
        type='text'  
        label='CPF' 
        name='cpf' 
        value={dados && cpf}
        onChange={HandleChange}
        />

         </div>
         {/* Dados do plano em outro componente */}
        <DadosdoPlano  />
    </div>
);

}

export default DadosPinSS;