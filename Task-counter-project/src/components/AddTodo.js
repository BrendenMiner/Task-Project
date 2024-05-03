import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import "./AddTodo.css";

const AddTodo = () => {
  const { addTodoAction } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Please provide a task");
    }
    addTodoAction(title);
    setTitle("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={handleTitleChange} />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default AddTodo;
