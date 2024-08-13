import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const Balance = styled.h2`
  font-weight: 500;
  & span {
    font-weight: bold;
  }
`;

const AddBtn = styled.button`
  cursor: pointer;
  background-color: #a990fb;
  color: rgb(255, 255, 255);
  padding: 7px 20px;
  font-size: 16px;
  border: none;
  text-transform: uppercase;
  border-radius: 5px;
`;

const OverviewComponent = ({ toggle, setToggle, income, expense }) => {
  const bal = income - expense;

  return (
    <Container>
      <Balance>
        Balance <span>₹{bal}</span>
      </Balance>
      <AddBtn onClick={() => setToggle(!toggle)}>
        {toggle ? "Cancel" : "Add"}
      </AddBtn>
    </Container>
  );
};

OverviewComponent.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
  income: PropTypes.number.isRequired,
  expense: PropTypes.number.isRequired,
};

export default OverviewComponent;