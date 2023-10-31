import './ExpenseItem.css';

// export default function ExpenseItem({ title, amount, date }) {
//   return (
//     <div className="expense-item">
//       <div className="">{date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">
//           ${amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="">{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          $
          {props.amount
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
        </div>
      </div>
    </div>
  );
}
