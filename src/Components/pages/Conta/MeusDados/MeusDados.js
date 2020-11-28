import React from 'react';
import Input from '../../../Form/Input';
import Button from '../../../Form/Button';
import styles from './MeusDados.module.css';

import { ALTER_PASS } from '../../../../api';
import useForm from '../../../../Hooks/useForm';
import HeaderTitlePrint from '../../../Head/Prints';
import { UserContext } from '../../../../UserContext';
import {formatCPF, formatNascimento} from '../../../../Hooks/dataFormat';



const MeusDados = () => {
    const ref = React.createRef();
    const newpass = useForm('newpass');
    const pass = useForm("pass");

    
    const {dados, error, setError, loading} = React.useContext(UserContext);
    const cpf = formatCPF(dados);
    const nascimento = formatNascimento(dados);

    const  [passwordAtual, setPasswordAtual] = React.useState('')
    const  [newPasswordTwo, setNewPasswordTwo] = React.useState('')
    const  [success , setSuccess] = React.useState(null);


    const  HandleChange = ({target}) =>  { return  target.innerText  }
    

    async function SubmitPost (event) {
        event.preventDefault();
        if(newpass.validate() && pass.validate()){
            
            if (newpass.value === '' && newPasswordTwo === '' ) {
                setError('Preencha os campos para alterar a senha')
                setSuccess(null);
                return false;
            }
            if (newpass.value !== newPasswordTwo ){
                setError('Verifique se os campos são semelhantes')
                setSuccess(null);
                return false;
            }

            if (newpass.value === pass.value) {
                setError('Não é possível utilizar uma das senhas anteriores')
            }

            const {url, options } = ALTER_PASS(dados.CPF, newpass.value, pass.value);
            const response = await fetch(url, options);
            const json = await response.json();
            console.log(json);
            try {    
       
            if (json.StatusCode !== 200) throw new Error(json.Message)
            else  setSuccess('Senha alterada com sucesso!')    
            }   
             
            catch (err) {
                setError(err.message)

            } finally{
                newpass.value = '';
                pass.value = '';
                setNewPasswordTwo('');       
            }
        }
    }
        
    

    return (
        <div className=' animeLeft DadosPessoais container-internal'>
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
           value={dados && dados.codigo}  
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
            value={dados && dados.plano}
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
           {success && <p className={styles.successInfo}>{success}</p>}
        </form>
            </div>
   
       </div>
      
        );
};

export default MeusDados;