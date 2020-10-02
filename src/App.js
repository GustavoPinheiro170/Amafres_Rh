import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import Conta from './Components/Conta/Conta';
import LoginPasswordLost from './Components/Login/LoginPasswordLost';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import CarteiraVirtual from './Components/Conta/CarteiraVirtual/CarteiraVirtual';
import RedeCredenciada from './Components/Conta/RedeCredenciada/RedeCredenciada';
import MeusDados from './Components/Conta/MeusDados/MeusDados';



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
     <ProtectedRoute path='/Conta/*' element={<Conta  setLocale={setLocale} />} />
     <Route path='CarteirinhaVirtual' element={<CarteiraVirtual />} />
     <Route path='RedeCredenciada' element={<RedeCredenciada />} />
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
