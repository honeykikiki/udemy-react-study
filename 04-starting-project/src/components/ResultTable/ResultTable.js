const formatter = new Intl.NumberFormat('ko', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function ResultTable(props) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData, i) => {
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.savingsEndOfYear)}</td>
              <td>{formatter.format(yearData.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  yearData.savingsEndOfYear -
                    props.initialInvestment -
                    yearData.yearlyContribution * yearData.savingsEndOfYear
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment +
                    yearData.yearlyContribution * yearData.savingsEndOfYear
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
