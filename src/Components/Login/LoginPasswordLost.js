import React from 'react';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../Form/Button';
import Input from '../Form/Input';


const LoginPasswordLost = () => {
    const { error, loading} = React.useContext(UserContext);

    const email = useForm('email');

    async function handleSubmit(event) {
        event.preventDefault();
        if(email.validate()){

        }
    }


    return (
    <section className='animeLeft'>
         <h1 className='title'>Redefinir Senha</h1>
         <form action='' onSubmit={handleSubmit}>
             <Input  type='email' label='E-mail' name='email' {...email} />
             {loading ?  (<Button disabled>Carregando...</Button>
             ): (<Button>Enviar</Button>)}
                
            {error && <p>{error}</p>}
        </form>
    </section>
    );

}

export default LoginPasswordLost;