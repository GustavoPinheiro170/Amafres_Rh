import React from  'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from './../Assets/amafresp.jpg';
import { UserContext } from '../UserContext'

const Header  = () => {

    const {data, userLogout} = React.useContext(UserContext);

    return (
        <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <Link className={styles.logo} to='/' aria-label="Logo - AmafrespRH"> <img className='logoImg' src={Logo} alt=''/> </Link>
            {data ? ( <p className={styles.nomeLogin}>{data.nome}  <button className={styles.buttonLogout} onClick={userLogout}>Sair</button></p>
            ) : ( 
            <Link className={styles.login} to='/'> Login  </Link>
            )}
        
        </nav>

        </header>
    )
}
export default Header;