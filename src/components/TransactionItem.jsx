import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e6e8e9;
  background-color: #3cabeb;
  border-radius: 5px;
  padding: 10px 20px;
  border-right: 5px solid ${(props) => (props.isExpense ? "red" : "green")};
  margin-bottom: 10px;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  background-color: #a990fb;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;

import PropTypes from "prop-types";

const TransactionItem = ({ transaction, removeTransaction }) => {
  return (
    <Item isExpense={transaction?.transType === "expense"}>
      <span>{transaction.details}</span>
      <span>${transaction.amount}</span>
      <RemoveButton onClick={() => removeTransaction(transaction.id)}>
        Remove
      </RemoveButton>
    </Item>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    details: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    transType: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  removeTransaction: PropTypes.func.isRequired,
};

export default TransactionItem;

