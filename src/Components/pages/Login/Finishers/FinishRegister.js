import React from 'react';
import { UserContext } from '../../../../UserContext';

import { replaceCPF } from '../../../../Hooks/maskcpf';
import Input from '../../../Form/Input';
import Button from '../../../Form/Button';
import useForm from '../../../../Hooks/useForm';
import FinisherSucess from './CustomAnimate/FinisherSucess';



const FinishRegister = () =>  {
    const {finisherRegister , registerFinisher} = React.useContext(UserContext);
    const [finish , setFinish] = React.useState(true);
    const username  = useForm('confirmcpf');


    async function handleSubmit(event) {
        event.preventDefault();
        if(username.validate()){
            finisherRegister(replaceCPF(username.value));
            setFinish(false);
        }
    }

    return (
        <div>
              {finish ? 
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
            </div> :  null }
              {registerFinisher ? <FinisherSucess information='Cadastro realizado com sucesso!' />: null }
        </div>

    );

}

export default FinishRegister;
