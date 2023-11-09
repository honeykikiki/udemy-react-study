import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
  const valueArray = props.dataPoints.map((datalist) => datalist.value);
  const totalMaximum = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => {
        return (
          <ChartBar
            key={dataPoints.label}
            value={dataPoints.value}
            maxValue={totalMaximum}
            label={dataPoints.label}
          />
        );
      })}
    </div>
  );
}
