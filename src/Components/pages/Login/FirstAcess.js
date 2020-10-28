
import React from 'react';
import { replaceCPF } from '../../../Hooks/maskcpf';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../UserContext';
import Button from '../../Form/Button';
import Input from '../../Form/Input';

const FirstAcess = () => {

    const { error, loading, firtAcess} = React.useContext(UserContext);

    const email = useForm('email');
    const senha = useForm('');
    const username  = useForm('text');

    async function handleSubmit(event) {
        event.preventDefault();
        if(email.validate() &&  senha.validate() && username.validate()){
            firtAcess(replaceCPF(username.value), senha.value, email.value);
        }
    }
    

    return (
    <section className='animeLeft'>
         <h1 className='title'>Primeiro Acesso</h1>
         <form action='' onSubmit={handleSubmit}>
             <Input
              type='email' 
              label='E-mail' 
              name='email' 
              {...email} 
              />

             <Input 
             type='text' 
             label='CPF' 
             name='cpf'
             {...username}
             />

             <Input  
             type='password' 
             label='Senha' 
             name='senha' 
             {...senha} 
             />

             {loading ?  (<Button disabled>Carregando...</Button>
             ): (<Button>Enviar</Button>)}     
            {error && <p>{error}</p>}
        </form>
    </section>
    );
}
export default FirstAcess;