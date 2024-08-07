import classes from './Expense.module.css';

function Expense(props) {
  return (
  <li className={classes.expense}> 
    <p className={classes.shop}>{props.shop}</p>
    <p className={classes.text}>{props.body}</p>
  </li>
);
}



export default Expense;
