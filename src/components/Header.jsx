
export default Header;
import PropTypes from 'prop-types';

const Header = ({ setSection }) => {
  // Rest of the code

Header.propTypes = {
  setSection: PropTypes.func.isRequired,
};

  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => setSection('user')}>User</li>
          <li onClick={() => setSection('expenses')}>Expenses</li>
          <li onClick={() => setSection('budget')}>Budget</li>
        </ul>
      </nav>
    </header>
  );
};


