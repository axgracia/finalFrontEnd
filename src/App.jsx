import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header';
//import './App.css';
// import { Route, Routes } from 'react-router-dom';
//  import BudgetPage from './pages/BudgetPage';
//  import UserPage from './pages/UserPage';
import AddTransaction from "./components/AddTransaction";
import TransactionItem from "./components/TransactionItem";
 //import styled from "styled-components";
 //import GlobalStyles from "./components/GlobalStyles";

  //   const main = styled.div`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  // `;


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
      <Header onCreateExpense={showModalHandler} />
                 <main>
       <ExpenseList 
          isAdding={modalIsVisible}
          onStopAdding={hideModalHandler} 
          />   
         
          <AddTransaction />
          <TransactionItem/>
          
      </main>
      </>
      );
       
  
}

export default App;
