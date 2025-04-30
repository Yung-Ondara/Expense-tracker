import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm.js';
import ExpenseTable from './components/ExpenseTable.js';
import SearchBar from './components/SearchBar.js';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState('');

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(search.toLowerCase()) ||
    expense.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: Date.now() }
    ]);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable
        expenses={filteredExpenses}
        onDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
};

export default App;

