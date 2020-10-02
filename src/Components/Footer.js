import React from  'react';
import styles from './Footer.module.css';
import Facebook from '../Assets/facebook.svg';
import Linkedin from '../Assets/linkedin.svg';
import Instagram from '../Assets/instagram.svg';
const Footer  = () => {

    return (
    <div className={styles.footer}>
        <ul>
            <li className={styles.facebook}>
             <img src={Facebook} alt='Facebook'/>
            </li >
            <li className={styles.instagram}>
                <img src={Instagram} alt='Instagram' />
            </li>
            <li className={styles.Linkedin}>
            <img src={Linkedin} alt='Linkedin' />
            </li>

        </ul>

    </div>
    )
}
export default Footer;