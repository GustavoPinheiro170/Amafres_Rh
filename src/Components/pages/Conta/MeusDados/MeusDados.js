import React from 'react';
import HeaderTitlePrint from '../../../Head/Prints';
import styles from './MeusDados.module.css';
import Input from '../../../Form/Input';
import { UserContext } from '../../../../UserContext';
import Button from '../../../Form/Button';

import {formatCPF, formatNascimento} from '../../../../Hooks/dataFormat';
import useForm from '../../../../Hooks/useForm';


const MeusDados = () => {
    const ref = React.createRef();
    const newpass = useForm('newpass');
    const pass = useForm("pass");

    
    const {dados, error, setError, loading, newPassword} = React.useContext(UserContext);
    const cpf = formatCPF(dados);
    const nascimento = formatNascimento(dados);

    const  [passwordAtual, setPasswordAtual] = React.useState('')
    const  [newPasswordTwo, setNewPasswordTwo] = React.useState('')



    const  HandleChange = ({target}) =>  { return  target.innerText  }

    
    const SubmitPost = (event) =>  {
        event.preventDefault();

        if(newpass.validate() && pass.validate()){

            if( newpass.value === '' && newPasswordTwo === '' ){
                setError('Favor preencher os campos necessários');
                return false;
             }else if (newpass.value !== newPasswordTwo ){
                setError('Verifique se os campos são semelhantes');
                return false;
             }  
            else{
            newPassword(newpass.value)
            setError(null);
            setPasswordAtual('');
            setNewPasswordTwo('');
            return true;
            }
        }
        
    }

    return (
        <div className='DadosPessoais container-internal'>
        <div ref={ref}>
        <HeaderTitlePrint title='Meus Dados' reference={ref} filename='Meus Dados - Amafresp' />
        <div className={`${styles.containerDados} animeLeft`} >
            
            <div className={styles.col6} >
           <Input
            type='text' 
            className={styles.flexItem} 
            label='Nome Completo' 
            name='NomeCompleto' 
            value={dados && dados.nome} 
            onChange={HandleChange}
            
            />
           <Input 
           type='text' 
           className={styles.flexItem} 
           label='Inscrição' 
           name='Inscrição' 
           value={dados && dados.inscricao}  
           onChange={HandleChange}/>     
           </div>
           

           <div className={styles.col6} >
           <Input 
           type='text'  
           className={styles.flexItem}
           label='CPF' 
           name='cpf' 
           value={dados && cpf}  
           onChange={HandleChange} />

           <Input 
           type='text'  
           className={styles.flexItem} 
           label='Dt Nascimento' 
           value={dados && nascimento} 
            onChange={HandleChange} />     
           </div>


            <div className={styles.col3} >
           <Input type='text'
            className={styles.flexItem}
            label='Acomodação'
            name='acomodacao'
            value='Enfermaria'
            onChange={HandleChange} 
            />
            
           <Input type='text' 
           className={styles.flexItem} 
           label='Abragência' 
           name='abrangecia' 
           value='São Paulo' 
           onChange={HandleChange} 
           />

           <Input
            type='text' 
            className={styles.flexItem} 
            label='Contrato' 
            name='contrato' 
            value='Isento'  
            onChange={HandleChange} 
            />

           </div>
          
        </div>
       </div>
         <div className={`${styles.containerDados} animeLeft`} >
       <h4 className='title_small'>Alterar Senha</h4>

       <form  action='' onSubmit={SubmitPost} >
           <div className={styles.col3} >

           <Input 
           type='password' 
           className={styles.flexItem} 
           label='Senha Atual' 
           name='password' 
           onChange={({target}) =>  setPasswordAtual(target.value) } 
           value={passwordAtual}
           required
           {...pass}
            />

           <Input
            type='password' 
            className={styles.flexItem} 
            label='Nova Senha' 
            name='novasenha' 
            {...newpass} 
            required/> 

           <Input 
           type='password' 
           className={styles.flexItem} 
           label='Nova Senha' 
           name='novasenha2' 
           onChange={({target}) =>  setNewPasswordTwo(target.value) } 
           value={newPasswordTwo}
           required
           />     

           
           </div>
           {loading ?  (<Button disabled>Carregando...</Button>
             ): (<Button>Alterar</Button>)}
           {error && <p>{error}</p>}
        </form>
            </div>
   
       </div>
      
        );
};

export default MeusDados;