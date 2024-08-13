import classes from './AddExpense.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function AddExpense({onCancel}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredShop, setEnteredShop] = useState(''); // Declare enteredShop state variable

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function shopChangeHandler(event) {
    setEnteredShop(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      body: enteredBody,
      shop: enteredShop
    };
    console.log(expenseData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Add Expense</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Category</label>
        <input type="text" id="name" required onChange={shopChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

//Added this because I received error
AddExpense.propTypes = {
  onBodyChange: PropTypes.func.isRequired,
  onShopChange: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default AddExpense;