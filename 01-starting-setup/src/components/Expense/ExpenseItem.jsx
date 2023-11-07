import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate.jsx';
import Card from '../Ui/Card';
import './ExpenseItem.css';
import ExpensesFilter from './ExpensesFilter.jsx';

export default function ExpenseItem(props) {
  // let title = props.title;
  const [title, setTitle] = useState();
  const [filteredYear, setFilteredYear] = useState();

  const clickHandle = () => {
    setTitle('Update Expense');
    console.log('click');
  };

  return (
    <div>
      <ExpensesFilter />
      {props.expense.map((v) => {
        return (
          <Card className="expense-item">
            <ExpenseDate date={v.date} />
            <div className="expense-item__description">
              <h2>{v.title}</h2>
              <div className="expense-item__price">
                $
                {v.amount
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
              </div>
            </div>
            <button onClick={clickHandle}>Change Title</button>
          </Card>
        );
      })}
    </div>
  );
}

// export default function ExpenseItem(props) {
//   return (
//     <div className="expense-item">
//       <div className="">{props.expenses.date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{props.expenses.title}</h2>
//         <div className="expense-item__price">
//           $
//           {props.expenses.amount
//             .toString()
//             .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ExpenseItem({ title, amount, date }) {
//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={date} />
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">
//           ${amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
//         </div>
//       </div>
//       <button onClick={clickHandle}>Change Title</button>
//     </Card>
//   );
// }
