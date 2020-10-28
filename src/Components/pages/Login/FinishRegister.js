import React from 'react';
import { UserContext } from '../../../UserContext';

import useForm from '../../../Hooks/useForm';
import { replaceCPF } from '../../../Hooks/maskcpf';
import Input from '../../Form/Input';
import Button from '../../Form/Button';


const FinishRegister = () =>  {
    const {finisherRegister} = React.useContext(UserContext);

    const username  = useForm('confirmcpf');


    async function handleSubmit(event) {
        event.preventDefault();
        if(username.validate()){
            finisherRegister(replaceCPF(username.value));
        }
    }

    
    return (
        <div>
        <h1 className='title_small'>Finalizar Registro</h1>   
            <form onSubmit={handleSubmit}>
             <Input 
             type='text' 
             label='Confirme seu CPF' 
             name='cpf'
             {...username}
             />

              <Button >Finalizar</Button>
        </form>
        </div>

    );

}

export default FinishRegister;
