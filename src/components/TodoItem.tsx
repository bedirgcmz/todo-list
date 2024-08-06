import React from "react";
import styled from "styled-components";
import { Todo } from "../hooks/useLocalStorage";
import { FaTrashAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItemContainer = styled.li<{ completed: boolean }>`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  background-color: ${({ completed }) => (completed ? "#d3ffd3" : "white")};

  span {
    text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  }
`;

const FaTrashAltStyles = styled.i`
  color: red;
`;
const FaCheckCircleStyles = styled.i<{ completed: boolean }>`
  color: ${({ completed }) => (completed ? "#50B498" : "#DD5746")};
  margin-right: 12px;
`;

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <TodoItemContainer completed={todo.completed} onClick={() => onToggle(todo.id)}>
      <span>{todo.text}</span>
      <span>
        <FaCheckCircleStyles completed={todo.completed}>
          {todo.completed ? <IoCheckmarkDoneCircleSharp /> : <FaCheckCircle />}
        </FaCheckCircleStyles>
        <FaTrashAltStyles onClick={() => onDelete(todo.id)}>
          <FaTrashAlt />
        </FaTrashAltStyles>
      </span>
    </TodoItemContainer>
  );
};

export default TodoItem;
