import React from 'react';
import styles from './Conta.module.css';
import UserStats from './UserStats';
import UserTraffic from './UserTraffic';
import { Route, Routes } from 'react-router-dom';
import CarteiraVirtual from './CarteiraVirtual/CarteiraVirtual';
import RedeCredenciada from './RedeCredenciada/RedeCredenciada';
import MeusDados from './MeusDados/MeusDados';
const NavBarConta = React.lazy(() =>  import('./NavBarConta'));


const Conta = () => {
    
    return ( 
        <main>
        <div className={styles.conta}>
        <React.Suspense fallback={<div>Carregando</div>}>
        <NavBarConta />
        </React.Suspense>
        <div >

        <Routes>
                <Route path='/' element={
                <div className={styles.UserGraphic}>
                <UserStats />
                <div className={styles.perfilUsuario}>
                <h3 className='title_small'> Valor utilizado </h3>
                <UserTraffic />
                </div>
                <div className={styles.perfilUsuario}>
                <h3 className='title_small'> Acessos </h3>
          
                </div>
                </div>
            } />
                <Route path='CarteirinhaVirtual' element={<CarteiraVirtual />} />
                <Route path='RedeCredenciada' element={<RedeCredenciada />} />
                <Route path='Perfil' element={<MeusDados />} />
            </Routes>
        </div>
    </div>
    </main>
);
}



export default Conta;