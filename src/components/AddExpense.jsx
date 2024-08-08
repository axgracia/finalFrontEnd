import { useState } from 'react';

import classes from './AddExpense.module.css';

function AddExpense() {
  const [ enteredBody, setEnteredBody ] = useState('');
  
  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Add Expense</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
      </p>
      <p>{enteredBody}</p>
      <p>
        <label htmlFor="name">Category</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default AddExpense;