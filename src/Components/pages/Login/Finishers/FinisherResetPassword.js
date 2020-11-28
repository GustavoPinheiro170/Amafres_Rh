import React from 'react';
import FinisherSucess from './CustomAnimate/FinisherSucess';

const FinisherResetPassword = () =>  {

    return <div>
          <h1 className='title' style={{fontSize: '40px', textAlign: 'center'}}>Alteração Realizada</h1>   
            <FinisherSucess information='Verifique sua caixa de email!'/>
    </div>
}

export default FinisherResetPassword;
