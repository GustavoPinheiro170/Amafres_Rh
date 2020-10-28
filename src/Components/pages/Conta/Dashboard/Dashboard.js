import React from 'react';
import UserStats from './UserStats';
import UserTraffic from './UserTraffic';
import styles from '../Conta.module.css';


const Dashboard = () =>  {
        return (
            <div className={`${styles.UserGraphic } container-internal`}>
                <UserStats />
                <div>
                <h3 className='title_small'> Valor utilizado </h3>
                <UserTraffic />
                </div>
                <div>
                <h3 className='title_small'> Acessos </h3>
          
                </div>
                </div>


        );
}

export default Dashboard;