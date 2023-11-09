import React from 'react';
import Chart from '../Chart/Chart';

export default function ExpenseChart(props) {
  const chartDataPoints = [
    { label: '1월', value: 0 },
    { label: '2월', value: 0 },
    { label: '3월', value: 0 },
    { label: '4월', value: 0 },
    { label: '5월', value: 0 },
    { label: '6월', value: 0 },
    { label: '7월', value: 0 },
    { label: '8월', value: 0 },
    { label: '9월', value: 0 },
    { label: '10월', value: 0 },
    { label: '11월', value: 0 },
    { label: '12월', value: 0 },
  ];

  for (const expenses of props.expenses) {
    const expenseMonth = expenses.date.getMonth();
    chartDataPoints[expenseMonth].value += expenses.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}
