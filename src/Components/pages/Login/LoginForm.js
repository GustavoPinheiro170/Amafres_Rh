import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../../Hooks/useForm';
import Button from '../../Form/Button';
import Input from '../../Form/Input';
import { UserContext } from '../../../UserContext';
import { replaceCPF } from '../../../Hooks/maskcpf';



const LoginForm  = () => {


    const username  = useForm('text');
    const password = useForm('pass');
    


    const {userLogin, error, loading, setError} = React.useContext(UserContext);

   async function handleSubmit(event) {
        event.preventDefault();
        if(username.validate() && password.validate()){       
            userLogin(replaceCPF(username.value)  , password.value)
        }
    }
    function clearError() { setError(null) }

    return (
    <section className='animeLeft'>
        <h1 className='title'>Login</h1>
        <form action='' onSubmit={handleSubmit}>
             <Input 
             type='text' 
             label='CPF' 
             name='cpf'
             {...username}
             />

             <Input  
             type='password' 
             label='Senha' 
             name='password' 
             {...password} />

             {loading ?  (<Button disabled>Carregando...</Button>
             ): (<Button>Entrar</Button>)}
                
            {error && <p>{error}</p>}
        </form>
        <Link onClick={clearError} to="PerdeuSenha" >Recuperar senha</Link>
        <Link onClick={clearError} to="PrimeiroAcesso" style={{float:'right'}} >Primeiro acesso</Link>

    </section>
    );

}

export default LoginForm;