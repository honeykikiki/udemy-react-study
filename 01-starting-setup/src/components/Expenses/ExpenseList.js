import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <p>No expense found.</p>;
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
