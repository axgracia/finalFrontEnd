    import Expense from './Expense';
    
    function ExpenseList() {
        return (
            <div>
                <h1>Expense List</h1>
                <ul>
                <Expense shop="New expense" body="Groceries" />
                <Expense shop="New expense" body="Car tires" />

                </ul>
            </div>
        );
    }

    export default ExpenseList;