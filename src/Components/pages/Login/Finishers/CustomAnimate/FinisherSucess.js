import React from 'react';
import { UserContext } from '../../../../../UserContext';
import Button from '../../../../Form/Button';
import styles from '../FinisherSucess.module.scss';


const FinisherSucess = (props) =>  {
    const { returnLogin } = React.useContext(UserContext);

    return <div className={`${styles.dummyPositioning} ${styles.dFlex}`} >
            <div className={styles.successIcon}>
                <div className={styles.successIcon__tip}></div>
                <div className={styles.successIcon__long}></div>
            </div>
                <p className={styles.information}>{props.information}</p>

                <Button  style={{
                margin: '30px',
                justifyContent: 'center' ,
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto'
                }} onClick={returnLogin} >Realizar Login</Button>
            </div>

}
export default FinisherSucess;