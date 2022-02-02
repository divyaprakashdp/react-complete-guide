import './ExpenseItem.css'
import './ExpenseDate.js'
import ExpenseDate from './ExpenseDate.js';

function ExpenseItems(props) {
    

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
