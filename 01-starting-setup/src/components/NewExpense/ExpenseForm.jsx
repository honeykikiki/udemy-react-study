import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {
  const [title, setEnterTitle] = useState('');
  const [amount, setEnterAmount] = useState('');
  const [date, setEnterDate] = useState(new Date());

  // const [userInput, setUserInput] = useState({
  //   enterTitle: '',
  //   enterAmount: '',
  //   enterDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enterTitle: event.target.value,
    //   };
    // });
    // console.log(userInput);
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });
  };

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === 'title') {
  //     setEnterTitle(value);
  //   }

  //   if (identifier === 'date') {
  //     setEnterDate(value);
  //   }

  //   if (identifier === 'amount') {
  //     setEnterAmount(value);
  //   }
  // };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      enterTitle: title,
      enterAmount: amount,
      enterDate: new Date(date),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
            // onChange={(event) => inputChangeHandler('title', event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0}
            step={1}
            value={amount}
            onChange={amountChangeHandler}
            // onChange={(event) => inputChangeHandler('amount', event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            max={date}
            value={date}
            onChange={dateChangeHandler}
            // onChange={(event) => inputChangeHandler('date', event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
