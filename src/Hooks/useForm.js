import React from 'react';


const types = {
    email: {
        regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message : "Preencha um email valido"
    },
    text: {
        regex: /\b\d{6}\b/ ,
        message: "Verifique suas credências de inscrição."
    },
    newpass: { 
        regex: /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        message: "Minino de 8 caracteres contendo simbolos e numeros"
    }
}

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    function validate(value){
        if(type === false) return true;
        if(value.lenght === '' ){
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
        if(error) validate(target.value)
        setValue(target.value);
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