import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 1, title: '커피', amount: 4500, date: new Date(2023, 2, 28) },
    { id: 2, title: '점심', amount: 7000, date: new Date(2023, 3, 1) },
    { id: 3, title: '아이스크림', amount: 1500, date: new Date(2023, 3, 2) },
    { id: 4, title: '저녁', amount: 12500, date: new Date(2023, 3, 2) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((v) => {
        return <ExpenseItem title={v.title} amount={v.amount} date={v.date} />; // 필요한 정보만 받는 방법
        // return <ExpenseItem expenses={v} />; // 전체를 한번에 받는 방법
      })}
    </div>
  );
}

export default App;
