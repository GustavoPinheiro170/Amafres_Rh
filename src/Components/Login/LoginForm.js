import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Form/Button';
import Input from '../Form/Input';
import { UserContext } from '../../UserContext';

const LoginForm  = () => {


    const username = useForm('text');
    const password = useForm('password');

    const {userLogin, error, loading} = React.useContext(UserContext);


   async function handleSubmit(event) {
        event.preventDefault();
        if(username.validate() && password.validate()){
            userLogin(username.value , password.value)
        }
    }

    return (
    <section className='animeLeft'>
        <h1 className='title'>Login</h1>
        <form action='' onSubmit={handleSubmit}>
             <Input type='text' label='Inscrição' name='Inscricao' {...username}/>
             <Input  type='password' label='Senha' name='password' {...password} />
             {loading ?  (<Button disabled>Carregando...</Button>
             ): (<Button>Entrar</Button>)}
                
            {error && <p>{error}</p>}
        </form>
        <Link to="PerdeuSenha" >Recuperar senha</Link>
    </section>
    );

}

export default LoginForm;