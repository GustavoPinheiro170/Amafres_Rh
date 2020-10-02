import React from 'react';
import styles from './Input.module.css';

const Input = ({label , type, name, value, onChange, error, onBlur, ...props}) => {

        return ( 
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input className={styles.input} 
            id={name}
            name={name }
            type={type}
            onChange ={onChange}
            value={value}
            onBlur = {onBlur}
            {...props}
                 />
            {error && <p className={styles.error}>{error}</p>}
        </div>
        );
    }

export default Input;