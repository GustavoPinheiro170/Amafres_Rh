import React from 'react';
import { VictoryChart, VictoryArea, VictoryTheme } from 'victory';
import styles from './Graphic.module.css';




class UserTraffic extends React.Component {
  

  
  render() {
      return (
        <div className={`${styles.Graphic} animeLeft`}>
<VictoryChart
  animate={{ duration: 500, easing: "bounce" }}
  theme={VictoryTheme.material}
>
  <VictoryArea
    style={{ data: { fill: "#058069" } }}

  />
</VictoryChart>
        </div>
      );
    }
  }
  export default UserTraffic;
