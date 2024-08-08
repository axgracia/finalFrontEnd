
import classes from './Expense.module.css';

function Expense(props) {
  return (
  <ul className={classes.expense}> 
    <p className={classes.shop}>{props.shop}</p>
    <p className={classes.text}>{props.body}</p>
  </ul>
);
}



export default Expense;
