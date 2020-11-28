import React from 'react';
import ResultFilter from './ResultsFilter';
import styles from './Credenciados.module.css';
import { UserContext } from '../../../../UserContext';
import { FaMap} from 'react-icons/fa';

import Button from '../../../Form/Button';


const RedeCredenciada = () => {


    const [nameFilter, setNameFilter] = React.useState('');
    const [bairroFilter, setBairroFilter] = React.useState('');
    const [Municipy, setMunicipy] = React.useState(0);
    const [idUF, setIDUF] = React.useState(0);
    const [idRede, setIdRede] = React.useState(null);
    const [idEspecialidade, setidEspecilidade] = React.useState(null);
    
    const [errorForm, setErrorForm] = React.useState(null);
    const { 
           uf, 
           setCityUF,
           city, 
           tipoRede, 
           especialidade, 
           GetUF,
           GetFiltersCredentials,
           comboload,
           setInfo,
           loading
           } = React.useContext(UserContext);


    React.useEffect(() => { 
         if(!uf) 
         GetUF();

        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        function SearchFilters(event){
            event.preventDefault();
            try {
                if(!idUF || !Municipy ) throw new Error('Por favor preencha a cidade e município');
                else setErrorForm(null);
                GetFiltersCredentials(
                    idUF,
                    Municipy,
                    bairroFilter,
                    idRede,
                    idEspecialidade,
                    nameFilter, 
                    )
                    setInfo(false);

            }catch(err){
                setErrorForm(err.message)
            }

        }

 
        function changeMunicipy(target){if(uf)  setMunicipy(target);  }

        function changeUF(target) { if(uf)  setCityUF(target); setIDUF(target); }

        return (
            <div className='animeLeft container-internal'>
               <h4 className='title_small'> Rede Credenciada</h4>
                <div className={styles.container_credenciados} >

                <div className={styles.internal}>
                    <h3 className={styles.title_indicador} ><FaMap />Indicador Médico</h3> 
                <form onSubmit={SearchFilters} >
                    <label htmlFor='nome'>Nome</label>
                        <input
                        name='nome' 
                        type='text' 
                        placeholder='EX: A C CAMARGO CANCER CENTER' 
                        onChange={(e) =>  setNameFilter(e.target.value)}
                        />


                    <label htmlFor='cidade'>Cidade *</label>
                    <select name='cidade' id='cidade' onClick={(e) => {changeUF(e.target.value)}}>
                       { uf ? uf.map( (local, index) => {
                           return <option  value={local.idUF} key={index}>{local.nome}</option>
                       }) : null }
                    {comboload ?  <option>Carregando...</option> : null  }

                    </select>


                    <label htmlFor='municipio'>Município *</label>
                    <select name='municipio' id='municipio' onChange={(e) => {changeMunicipy(e.target.value)}}>
                       { city ? city.map( (local, index) => {
                           return <option  value={local.idCidade} key={index}>{local.nome}</option>
                       }) : null }
                      {comboload ? <option>Carregando...</option> :  <option>- SELECIONE A CIDADE - </option>  }
                    </select>


                    <label htmlFor='Bairro'>Bairro</label>
                        <input 
                        name='Bairro' 
                        type='text' 
                        placeholder='EX: ACLIMAÇÃO' 
                        onChange={(e) =>  setBairroFilter(e.target.value)}
                        />


                    <label htmlFor='Prestador'>Tipo de Prestador</label>
                    <select name='Prestador' id='Prestador' 
                        onClick={(e) => setIdRede(e.target.value) }>
                       { tipoRede ? tipoRede.map((tipo, index) =>  {
                           return <option key={index} value={tipo.idTpCredenciado}>{tipo.descricao}</option>
                       }): <option>SELECIONE O TIPO</option> } 
                    </select>


                    <label htmlFor='especialidade'>Especialidade</label>
                    <select name='especialidade' id='especialidade' 
                        onClick={(e) => setidEspecilidade(e.target.value) }>

                    { especialidade ? especialidade.map((tipo, index) =>  {
                           return <option key={index} value={tipo.codigo}>{tipo.descricao}</option>
                       }): <option>SELECIONE A ESPECILIDADE</option> } 
                    </select>
                    {errorForm && <p>{errorForm}</p>}
                    {loading ? <Button disabled >Carregando...</Button> : <Button >Buscar</Button> } 
                    </form>
                   
                </div>
                         <ResultFilter /> 
                     
               </div>
                   
            </div>
        );
}
export default RedeCredenciada;