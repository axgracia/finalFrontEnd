import classes from './AddExpense.module.css';

function AddExpense() {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Add Expense</label>
        <textarea id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Category</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default AddExpense;