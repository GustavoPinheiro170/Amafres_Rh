import React from 'react';
import Pdf from "react-to-pdf";
import styles from './Print.module.css';




const HeaderTitlePrint = (props) => {

    return (
        <div className={styles.Header}>
        <h3 className='title_small'>{props.title}</h3>

        <div className={styles.buttonsPrint}>
           <button className={styles.printer} onClick={() =>  { window.print();}}></button>
           <Pdf targetRef={props.reference} filename={`${props.filename}.pdf`}>
           {({ toPdf }) => <span className={styles.pdf} onClick={toPdf}></span>}
           </Pdf>
           </div>
       </div>

    );
}
export default HeaderTitlePrint;