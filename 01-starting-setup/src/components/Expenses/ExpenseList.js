import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found.</h2>;
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
}
