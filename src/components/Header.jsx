import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './Header.module.css';


      function Header({ onAddExpense }) {
        return (
          <header className={classes.header}>
            <h1 className={classes.logo}>
              <MdMessage />
              Expense Tracker
            </h1>
            <p>
              <button className={classes.button} onClick={onAddExpense}>
                <MdPostAdd size={18} />
                Add Expense
              </button>
            </p>
          </header>
        );
      }

export default Header;


















