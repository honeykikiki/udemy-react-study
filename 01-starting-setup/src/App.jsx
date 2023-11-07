import ExpenseItem from './components/Expense/ExpenseItem.jsx';
import NewExpense from './components/NewExpense/NewExpense.jsx';

function App() {
  const expenses = [
    { id: 1, title: '커피', amount: 4500, date: new Date(2023, 1, 29) },
    { id: 2, title: '점심', amount: 7000, date: new Date(2023, 3, 1) },
    { id: 3, title: '아이스크림', amount: 1500, date: new Date(2023, 3, 2) },
    { id: 4, title: '저녁', amount: 12500, date: new Date(2023, 3, 2) },
  ];

  const addExpenseHandler = (expense) => {
    console.log('App.jsx');
    console.log(expense);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItem expense={expenses} />
    </div>
  );
}

export default App;
