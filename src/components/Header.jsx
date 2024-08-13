import { MdMonetizationOn} from 'react-icons/md';
import { Link } from "react-router-dom";
import classes from './Header.module.css';


      import PropTypes from 'prop-types';
      
      function Header({onAddExpense}) {
        // Rest of the code
      
      Header.propTypes = {
        onAddExpense: PropTypes.func.isRequired,
      };
      
     
        return (
          <header className={classes.header}>
            <h1 className={classes.logo}>
              <MdMonetizationOn />
              Expense Tracker
            </h1>
            
            <h3>
            <nav>
              <ul className= "link-list">
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/budget">Budget</Link></li>  
                <li><Link className="link" to="/expenses">Expenses</Link></li>
              </ul>
            </nav> 
            </h3>
            <p>
              <button className={classes.button} onClick={onAddExpense}>
                {/*<MdMonetizationOn size={18} />*/}
                Add Expense
              </button>
            </p>

            
          </header>
        );
      }

export default Header;  
                
                  
                  
                
              


















