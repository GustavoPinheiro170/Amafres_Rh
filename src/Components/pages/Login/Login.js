import React from 'react';
import styles from './Login.module.css';

import {Routes, Route, Navigate} from 'react-router-dom';
import { UserContext } from '../../../UserContext';

import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import FirstAcess from './FirstAcess';
import ConfirmEmail from './ConfirmEmail';
import FinishRegister from './FinishRegister';




const Login = () => {

    const {login} = React.useContext(UserContext);

    if(login === true) return <Navigate to ='/Conta' />
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
            <Routes>
                <Route exact path='/' element={<LoginForm />} />
                <Route exact path='amafrespRHfinisherRegister' element={<FinishRegister />} />
                <Route path='PerdeuSenha' element={<LoginPasswordLost />} />
                <Route path='PrimeiroAcesso' element={<FirstAcess />} />
                <Route path='ConfirmacaoEmail' element={<ConfirmEmail />} />
            </Routes>
            </div>
        </section>
    );
} 
export default Login;