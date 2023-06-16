import React from "react";

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className="todo-item">
      <h3 className="task-number">Task {index}</h3>
      <h3 className="task-title">{todo.title}</h3>
      <p className="task-description">{todo.description}</p>
      <h4 className={`task-status ${todo.completed ? "completed" : ""}`}>
        {todo.completed ? "Completed" : "Not Completed"}
      </h4>
      <div className="buttons">
        <button className="toggle-button" onClick={handleToggle}>
          Toggle Status
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
