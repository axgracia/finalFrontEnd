// src/components/Expense.jsx
import { useEffect, useState } from 'react';
import { getExpenses } from '../services/expenseService';

const Expense = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (error) {
        console.error('Error fetching expenses:', error);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.name}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expense;
