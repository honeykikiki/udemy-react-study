import './ExpenseDate.css';

export default function ExpenseDate({ date }) {
  const formatDate = (option) => date.toLocaleString('ko', option);

  return (
    <div className="expense-date">
      <div className="expense-date__month">{formatDate({ month: 'long' })}</div>
      <div className="expense-date__year">{date.getFullYear()}</div>
      <div className="expense-date__day">{formatDate({ day: '2-digit' })}</div>
    </div>
  );
}
