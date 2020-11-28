import React from 'react';
import { UserContext } from '../../../../UserContext';
import MapResultFilter from './MapResultFilter';
import UniqueFilter from './UniqueFilter';



const ResultFilter = () =>  {

const { info }= React.useContext(UserContext)


    return (
    <>
   {info ?  <UniqueFilter /> :  <MapResultFilter /> }
 
  </>
  );
}

export default ResultFilter;