export default App
import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header';
import './App.css';


function App() {
  const [modalIsVisible, setModalIsVisible ] = useState(false); 

  function showModalHandler() {
    setModalIsVisible(true);
  }
  function hideModalHandler() {
    setModalIsVisible(false);
}

  return (
    <>
    <Header onAddExpense={showModalHandler} />
    <main>
     <ExpenseList 
        isAdding={modalIsVisible}
        onStopAdding={hideModalHandler} 
        />
      </main>
    </>
  );
}


