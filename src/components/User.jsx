import PropTypes from 'prop-types';
import classes from './User.module.css';

function User(props) {
    return (
    <div className={classes.user}> 
      <p>{props.client}</p>
      <p>{props.body}</p>
    </div>
  );
}

User.propTypes = {
  client: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default User;