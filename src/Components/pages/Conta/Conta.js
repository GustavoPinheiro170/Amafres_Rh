import React from 'react';
import styles from './Conta.module.css';
import { Route, Routes } from 'react-router-dom';
import CarteiraVirtual from './CarteiraVirtual/CarteiraVirtual';
import RedeCredenciada from './RedeCredenciada/RedeCredenciada';
import MeusDados from './MeusDados/MeusDados';
import Dashboard from './Dashboard/Dashboard';
import DadosPinSS from './DadosPinSS/DadosPinSS';
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
                <Route path='/' element={<Dashboard />} />
                <Route path='CarteirinhaVirtual' element={<CarteiraVirtual />} />
                <Route path='RedeCredenciada' element={<RedeCredenciada />} />
                <Route path='DadosCadastraisPinSS' element={<DadosPinSS />} />
                <Route path='Perfil' element={<MeusDados />} />
            </Routes>
        </div>
    </div>
    </main>
);
}



export default Conta;