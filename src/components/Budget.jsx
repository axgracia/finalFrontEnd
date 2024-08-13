// // src/components/Budget.jsx
// import { useEffect, useState } from 'react';
// //import { getBudget } from '../services/budgetService';

// const Budget = () => {
//   const [budget, setBudget] = useState([]);

//   useEffect(() => {
//     const fetchBudget = async () => {
//       try {
//         const data = await getBudget();
//         setBudget(data);
//       } catch (error) {
//         console.error('Error fetching budget:', error);
//       }
//     };
//     fetchBudget();
//   }, []);

//   return (
//     <div>
//       <h2>Budget</h2>
//       <ul>
//         {budget.map((item) => (
//           <li key={item.id}>
//             {item.category}: ${item.amount}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Budget;
