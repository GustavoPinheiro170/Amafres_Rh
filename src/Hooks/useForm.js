import React from 'react';
import { cpfMask } from './maskcpf';


const types = {
    email: {
        regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message : "Preencha um email valido"
    },
    text: {
        regex: /(\d{3}).(\d{3}).(\d{3})-(\d{2})/ ,
        message: "Verifique suas credências de acesso."
    },
    confirmcpf: {
        regex: /(\d{3}).(\d{3}).(\d{3})-(\d{2})/ ,
        message: "Digite seu CPF para finalizar seu registro"
    },
    newpass: { 
        regex: /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        message: "Minino de 8 caracteres contendo simbolos e numeros"
    },
    pass: {
        regex: /^\S+$/,
        message: 'Verifique sua senha atual'
    }
}

const useForm = (type) => {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');   
    
    function covertCPFinMask(value){
        if(type === 'text' || type === 'confirmcpf')
        setValue(cpfMask(value))
      
    }

    function validate(value){
    
        if(type === false) return true;

        if(value.lenght === '' || value === undefined ){

            setError('Preencha um valor');
            return false;

        }else if(types[type] && !types[type].regex.test(value)){

            setError(types[type].message);
            return false;
        }else {

            setError(null);
            return true
        }
    }

    function onChange({target}){
        if(error)
        validate(target.value)   
        setValue(target.value);  
        covertCPFinMask(target.value);
    } 


    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    }
}
export default useForm;