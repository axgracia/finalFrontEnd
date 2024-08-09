    import{ useState } from 'react';
    import Modal from './Modal';
    import Expense from './Expense';
    import AddExpense from './AddExpense';
    import classes from './ExpenseList.module.css';
    
    function ExpenseList({isAdding, onStopAdding}) {
        const [enteredBody, setEnteredBody] = useState('');
        const [enteredShop, setEnteredShop] = useState('');

             function bodyChangeHandler(event) {
            setEnteredBody(event.target.value);
        }

        function shopChangeHandler(event) {
            setEnteredShop(event.target.value);
        }

        return (
            <>
            {isAdding && (
            <Modal onClose={onStopAdding}>
            <AddExpense 
                onBodyChange={bodyChangeHandler} 
                onShopChange={shopChangeHandler} 
                onCancel={onStopAdding}
            />
            </Modal>
            )}
           {/* <button onClick={hideModalHandler}>Add New Expense</button>*/}
          <div>
                <h1 style={{ textAlign: 'left',  }}>Expense List</h1>
                <ul className={classes.expense} className={classes.shop} >
                    <Expense shop={enteredShop} body={enteredBody} />
                    <Expense shop="New expense" body="Car tires  $200" />
                </ul>
            </div>
            </>
        );
    }
    
    export default ExpenseList;