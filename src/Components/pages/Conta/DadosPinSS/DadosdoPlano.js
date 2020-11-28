import React from 'react';
import Input from '../../../Form/Input';
import styles from './DadosPin.module.css';
import { UserContext } from '../../../../UserContext';
import { formatAdesao } from '../../../../Hooks/dataFormat';


const DadosdoPlano = () => {

    const {dados, HandleChange} = React.useContext(UserContext);
    const adesao = formatAdesao(dados);



    return <div className={styles.dadosdoPlano}>
        <h4 className='title_small'>Dados do Plano</h4>
        <div className={styles.sectionDados}>
            <Input 
            type='text' 
            label='Registro ANS' 
            value={dados && dados.RegistroANS}
            onChange={HandleChange} 
            />

            <Input 
            type='text' 
            label='Nome Operadora' 
            value={dados && dados.NomeOperadora} 
            onChange={HandleChange} 
            />
            <Input 
            type='text' 
            label='Cod. Plano ANS' 
            value={dados && dados.CodPlanoANS} 
            onChange={HandleChange} 
            />

        </div>

        <div className={styles.sectionDados}>
            <Input 
            type='text' 
            label='Nome do Plano' 
            value={dados && dados.NomePlano} 
            onChange={HandleChange} 
            />
            <Input 
            type='text' 
            label='Numero Contrato' 
            value={dados && dados.NumeroContrato} 
            onChange={HandleChange} 
            />

            <Input 
            type='text' 
            label='Tipo Contratação' 
            value={dados && dados.TpContratacao} 
            onChange={HandleChange} 
            />
        </div>
        <div className={styles.sectionDados}>
            <Input 
            type='text' 
            label='Regulamentação' 
            value={dados && dados.Regulamentacao} 
            onChange={HandleChange} 
            />

            <Input 
            type='text' 
            label='Padrão Acomodação' 
            value={dados && dados.PadraoAcomodacao} 
            onChange={HandleChange} 
            />

            <Input 
            type='text' 
            label='Abrangência Geográfica' 
            value={dados && dados.AreaAbrangencia} 
            onChange={HandleChange} 
            />

        </div>
        <div className={styles.sectionDados}>
            <Input 
            type='text' 
            label='Segmentação Assistencial' 
            value={dados && dados.Segmentacao} 
            onChange={HandleChange} 
            />

        </div>
            <h4 className='title_small'>Status Plano</h4>
        <div className={styles.sectionDados}>
            <Input 
            type='text' 
            label='Dt. Contratação'
            value={adesao && adesao}
            onChange={HandleChange} 
             />

            <Input 
            type='text' 
            label='Dt. Inicio da Cobertura' 
            value={adesao && adesao} 
            onChange={HandleChange} 
            />

        </div>

        <h4 className='title_small'>Carência</h4>
        <div className={styles.sectionColumn}>
            <Input 
            type='text'
            label='Consultas' 
            value='Sem Carência' 
            onChange={HandleChange} 
            />
            <Input 
            type='text' 
            label='Exames e Procedimentos Ambulatoriais' 
            value='Sem Carência' 
            onChange={HandleChange} 
            />

            <Input 
            type='text' 
            label='Internações Clínicas ou Cirúrgicas' 
            value='Sem Carência' 
            onChange={HandleChange} 
            />

            <Input 
            type='text' 
            label='Parto a termo' 
            value='Sem Carência' 
            onChange={HandleChange} 
            />

            <Input 
            type='text' 
            label='Atendimento de urgência/Emergência' 
            value='Sem Carência'
            onChange={HandleChange} 
            />

        </div>


    </div>
}

export default DadosdoPlano