import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { UserContext } from '../../UserContext';

const Paginacao  = () =>  {


    const { totalPages,  setPages  }= React.useContext(UserContext)


        return (
            <Pagination
            count={totalPages.length}
            hideNextButton={true}
            hidePrevButton={true}
            onChange={(e) =>   setPages(parseInt(e.target.innerText))} 

            />

        )

}
export default Paginacao;