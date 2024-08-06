"use client";
import React, { useState } from "react";
import styled from "styled-components";
import useLocalStorage from "../hooks/useLocalStorage";
import TodoItem from "./TodoItem";

const TodoListContainer = styled.div`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    outline: none;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const TodoList: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useLocalStorage();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <TodoListContainer>
      <h1>Todo List</h1>
      <InputContainer>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </InputContainer>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </ul>
    </TodoListContainer>
  );
};

export default TodoList;
