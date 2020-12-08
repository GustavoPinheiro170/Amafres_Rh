      
import React from 'react';
import Pdf from "react-to-pdf";
import styles from './Print.module.css';
       

const PDF = (props) =>  {
          
return (
    <div className={styles.Header}>
    <h3 className='title_small'>{props.title}</h3>
    <div className={styles.buttonsPrint}>
    
    <Pdf
    targetRef={props.pdfReference}
    filename={`${props.filename}.pdf`}>
    {({ toPdf }) => <span className={styles.printer} 
    onClick={toPdf}></span>}

    </Pdf>
    
    </div>
    </div>
 )
}

        export default PDF;
