import React from 'react';
import { UserContext } from '../../../UserContext';
import Button from '../../Form/Button';
import email from '../../../Assets/email.gif'

const ConfirmEmail = () =>  {

    const {returnLogin} = React.useContext(UserContext);

    return <div className='modalConfirmacao'>
     <h1 className='title'>Confirmação</h1>
     <p style={{fontSize: '22px'}}>Verifique sua caixa de e-mail e clique no link para finalizar seu cadastro</p>
     
     <img src={email} alt='e-mail' />

        <Button  style={{
        margin: '30px',
        justifyContent: 'center' ,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto'
        }} onClick={returnLogin} >Realizar Login</Button>

     

    </div>

}


export default ConfirmEmail;