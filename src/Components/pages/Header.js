import React from  'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

import Logo from '../../Assets/amafresp.png';
import { UserContext } from '../../UserContext';

import { FaEllipsisV} from 'react-icons/fa';


const Header  = () => {

    const {dados, userLogout, handleToggleSidebar, hamburg} = React.useContext(UserContext);

    return (
        <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
               
               {hamburg ?<FaEllipsisV className='iconFabar' style={{
               width: '2rem',
               height: '1.3rem',
               cursor: 'pointer'
               }}
               onClick={() => handleToggleSidebar(true)}
                 /> : null } 
            
            <Link className={styles.logo} to='/' aria-label="Logo - AmafrespRH"> <img className={styles.logoImg} src={Logo} alt=''/> </Link>
            {dados ? ( <p className={styles.nomeLogin}>{dados.nome.split(' ').slice(0, 2).join(' ')}  <button className={styles.buttonLogout} onClick={userLogout}>Sair</button></p>
            ) : ( 
            <Link className={styles.login} to='/'> Login  </Link>
            )}
        
        </nav>

        </header>
    )
}
export default Header;