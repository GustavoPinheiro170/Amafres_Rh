import React from 'react';
import { replaceCPF } from '../../../Hooks/maskcpf';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../UserContext';
import Button from '../../Form/Button';
import Input from '../../Form/Input';


const LoginPasswordLost = () => {
    const { error, loading, resetPassword} = React.useContext(UserContext);

    const cpf = useForm('text');
    
    async function handleSubmit(event) {
        event.preventDefault();
        if(cpf.validate()){
            resetPassword(replaceCPF(cpf.value));
        }
    }

    return (
    <section className='animeLeft'>
         <h1 className='title'>Redefinir Senha</h1>
         <form action='' onSubmit={handleSubmit}>
             <Input  type='text' label='Insira seu CPF para receber uma nova senha' name='cpf' {...cpf} />
             {loading ?  (<Button disabled>Carregando...</Button>
             ): (<Button>Enviar</Button>)}
                
            {error && <p>{error}</p>}
        </form>
    </section>
    );

}

export default LoginPasswordLost;