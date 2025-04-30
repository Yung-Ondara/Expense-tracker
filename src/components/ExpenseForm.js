import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount || !category.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const newExpense = {
      description,
      amount: parseFloat(amount),
      category
    };

    onAddExpense(newExpense);

    // Reset form
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
