import React from "react";
import styled from "styled-components";
import { Todo } from "../hooks/useLocalStorage";
import { FaTrashAlt } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdFactCheck } from "react-icons/md";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItemContainer = styled.li<{ completed: boolean }>`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  color: ${({ completed }) => (completed ? "#f6f6f6" : "gray")};
  background-color: ${({ completed }) => (completed ? "#dddddda3" : "#fbfbfb00")};

  &: hover {
    background-color: #ffffff29;
    color: #625f5f;
    backdrop-filter: blur(10px);
  }

  span {
    text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
    min-width: 43px;
  }

  span.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const FaTrashAltStyles = styled.i`
  color: #b43f3f;
  padding-top: 4px;
`;
const FaCheckCircleStyles = styled.i<{ completed: boolean }>`
  color: ${({ completed }) => (completed ? "#f6f6f6" : "#DD5746")};
  /* margin-right: 12px; */
  font-size: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <TodoItemContainer completed={todo.completed} onClick={() => onToggle(todo.id)}>
      <span>{todo.text}</span>
      <span className="flex">
        <FaCheckCircleStyles completed={todo.completed}>
          {todo.completed ? <MdFactCheck /> : <MdCheckBoxOutlineBlank />}
        </FaCheckCircleStyles>
        <FaTrashAltStyles onClick={() => onDelete(todo.id)}>
          <FaTrashAlt />
        </FaTrashAltStyles>
      </span>
    </TodoItemContainer>
  );
};

export default TodoItem;
