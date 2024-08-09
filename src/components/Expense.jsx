
import PropTypes from 'prop-types';
import classes from './ExpenseList.module.css';

function Expense(props) {
  return (
  <ul className={classes.expense}> 
    <p className={classes.shop}>{props.shop}</p>
    <p className={classes.text}>{props.body}</p>
  </ul>
);
}

//Not sure about this(added because I received error)
Expense.propTypes = {
  shop: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Expense;
