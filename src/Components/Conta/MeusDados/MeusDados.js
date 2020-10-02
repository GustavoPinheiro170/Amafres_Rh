import React from 'react';
import HeaderTitlePrint from '../../Head/Prints';
import styles from './MeusDados.module.css';
import Input from '../../Form/Input';
import { UserContext } from '../../../UserContext';
import Button from '../../Form/Button';
import useForm from '../../../Hooks/useForm';


const MeusDados = () => {
    const ref = React.createRef();
    const newpass = useForm('newpass');
    const {data, error} = React.useContext(UserContext);
  

    return (
        <>
        <div ref={ref}>
        <HeaderTitlePrint title='Meus Dados' reference={ref} filename='Meus Dados - Amafresp' />
        <div className={`${styles.containerDados} animeLeft`} >

        <div className={styles.col6} >
           <Input type='text' label='Nome Completo' name='NomeCompleto' value={data && data.nome} disabled/>
           <Input type='text' label='Inscrição' name='Inscrição' value={data && data.inscricao} disabled/>     
           </div>
           
           <div className={styles.col6} >
           <Input type='text' label='CPF' name='cpf' value='999.999.999-99' disabled/>
           <Input type='text' label='Dt Nascimento' name='dtnascimento' value='27/06/1996' disabled/>     
           </div>

            <div className={styles.col3} >
           <Input type='text' label='Acomodação' name='acomodacao' value='Enfermaria' disabled/>
           <Input type='text' label='Abragência' name='abrangecia' value='São Paulo' disabled/>     
           <Input type='text' label='Contrato' name='contrato' value='Isento' disabled/>     
           </div>
          
        </div>
       </div>
       <h4 className='title_small'>Alterar Senha</h4>
           <div className={styles.col3} >
           <Input type='text' label='Senha Atual' name='password'   />
           <Input type='text' label='Nova Senha' name='novasenha' {...newpass} />     
           <Input type='text' label='Nova Senha' name='novasenha2' />     
           {error && <p>{error}</p>}
           </div>
           <Button >Alterar</Button>
       </>
        );
};

export default MeusDados;