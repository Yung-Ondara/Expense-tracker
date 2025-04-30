import React, { useState } from 'react';

const ExpenseTable = ({ expenses, onDeleteExpense }) => {
  const [sortKey, setSortKey] = useState(null);
  const [asc, setAsc] = useState(true);

  const sortExpenses = (key) => {
    setAsc(sortKey === key ? !asc : true);
    setSortKey(key);
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (!sortKey) return 0;
    const x = a[sortKey].toLowerCase();
    const y = b[sortKey].toLowerCase();
    return asc ? x.localeCompare(y) : y.localeCompare(x);
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => sortExpenses('description')}>Description ⬍</th>
          <th>Amount</th>
          <th onClick={() => sortExpenses('category')}>Category ⬍</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedExpenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
