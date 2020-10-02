import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { UserContext } from '../../UserContext';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import styles from './Login.module.css';


const Login = () => {

    const {login} = React.useContext(UserContext);

    if(login === true) return <Navigate to ='/Conta' />
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
            <Routes>
                <Route path='/' element={<LoginForm />} />
                <Route path='PerdeuSenha' element={<LoginPasswordLost />} />
            </Routes>
            </div>
        </section>
    );
} 
export default Login;