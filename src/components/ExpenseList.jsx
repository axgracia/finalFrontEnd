    import Expense from './Expense';
    import AddExpense from './AddExpense';
    
    function ExpenseList() {
        return (
            <>
            <AddExpense/>
          <div>
                <h1 style={{ textAlign: 'left',  }}>Expense List</h1>
                <ul>
                    <Expense shop="New expense" body="Groceries  $75" />
                    <Expense shop="New expense" body="Car tires  $200" />
                </ul>
            </div>
            </>
        );
    }
    
    export default ExpenseList;