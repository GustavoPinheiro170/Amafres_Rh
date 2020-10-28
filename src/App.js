import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Header from './Components/pages/Header';
import Footer from './Components/pages/Footer';
import './App.css';

import { UserStorage } from './UserContext';
import ProtectedRoute from './Components/Helper/ProtectedRoute';


import Conta from './Components/pages/Conta/Conta';
import Login from './Components/pages/Login/Login';
import LoginPasswordLost from './Components/pages/Login/LoginPasswordLost';
import CarteiraVirtual from './Components/pages/Conta/CarteiraVirtual/CarteiraVirtual';
import RedeCredenciada from './Components/pages/Conta/RedeCredenciada/RedeCredenciada';
import MeusDados from './Components/pages/Conta/MeusDados/MeusDados';
import DadosPinSS from './Components/pages/Conta/DadosPinSS/DadosPinSS';
import FirstAcess from './Components/pages/Login/FirstAcess';


function App() {
  
  const [locale, setLocale] = React.useState('pt');

  return (
   <div>
     <IntlProvider locale={locale} >
    <BrowserRouter>
       <UserStorage>
          <Header />
            <Routes>
              <Route path='/*' element={<Login />} />
              <Route path='/Login/*' element={<Login />} />
              <Route path='Login/PerdeuSenha' element={<LoginPasswordLost />} />
              <Route path='Login/PrimeiroAcesso' element={<FirstAcess />} />
              <ProtectedRoute path='/Conta/*' element={<Conta  setLocale={setLocale} />} />
              <Route path='CarteirinhaVirtual' element={<CarteiraVirtual />} />
              <Route path='RedeCredenciada' element={<RedeCredenciada />} />
              <Route path='DadosCadastraisPinSS' element={<DadosPinSS />} />
              <Route path='MeusDados' element={<MeusDados />} />
            </Routes>
           <Footer />
          </UserStorage>
        </BrowserRouter>
      </IntlProvider>
   </div>
  );
}

export default App;
