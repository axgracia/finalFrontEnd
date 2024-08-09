import classes from './AddExpense.module.css';
import PropTypes from 'prop-types';

function AddExpense({ onBodyChange, onShopChange, onCancel }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Add Expense</label>
        <textarea id="body" required rows={3} onChange={onBodyChange}/>
      </p>
      <p>
        <label htmlFor="name">Category</label>
        <input type="text" id="name" required onChange={onShopChange} />
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
  onShopChange: PropTypes.func.isRequired
};

export default AddExpense;