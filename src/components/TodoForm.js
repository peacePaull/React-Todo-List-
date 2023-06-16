import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        title: title,
        description: description,
        completed: false
      };
      addTodo(newTodo);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todo-input"
      />
      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="todo-textarea"
      ></textarea>
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
