import React from 'react';
import styles from './Graphic.module.css';
import {VictoryBar, VictoryTheme, VictoryAxis, VictoryChart} from 'victory';

const UserStats = ({dados}) => {


  const date = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
      ];



    return (
      <div>
        <h3 className='title_small'>Estátisticas de uso</h3>
        <div className={`${styles.Graphic} animeLeft`}>
        
        <VictoryChart
        theme={VictoryTheme.material} 
        domainPadding= {20}
        >

        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x / 1000}k`)}
        />

        <VictoryBar
            data={date} 
            x="quarter" 
            y="earnings"/>




        </VictoryChart>
        </div>

        </div>
    );
  }

export default UserStats;