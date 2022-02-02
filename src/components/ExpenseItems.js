import './ExpenseItem.css'

function ExpenseItems() {
  return (
    <div className='expense-item'>
      <div>28th Feb 2022</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <div className='expense-item__price'>$22.7</div>
      </div>
    </div>
  );
}

export default ExpenseItems;
