// "use client";
// import { useState, useEffect } from "react";

// export interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// const useLocalStorage = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const setLocalStorage = (pStringKey: string, pArray: any[]): void => {
//     localStorage.setItem(pStringKey, JSON.stringify(pArray));
//   };

//   const getLocalStorage = (pStringKey: string): any[] | null => {
//     const data = localStorage.getItem(pStringKey);
//     return data ? JSON.parse(data) : null;
//   };

//   useEffect(() => {
//     const storedTodos = getLocalStorage("todos");
//     if (storedTodos) {
//       setTodos(storedTodos);
//     }
//   }, []);

//   useEffect(() => {
//     setLocalStorage("todos", todos);
//   }, [todos]);

//   const addTodo = (text: string) => {
//     const newTodo: Todo = { id: Date.now(), text, completed: false };
//     setTodos((prevTodos) => [...prevTodos, newTodo]);
//   };

//   const toggleTodo = (id: number) => {
//     setTodos((prevTodos) =>
//       prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
//     );
//   };

//   const deleteTodo = (id: number) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   };

//   return { todos, addTodo, toggleTodo, deleteTodo };
// };

// export default useLocalStorage;

"use client";
import { useState, useEffect } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const useLocalStorage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const setLocalStorage = (pStringKey: string, pArray: any[]): void => {
    localStorage.setItem(pStringKey, JSON.stringify(pArray));
  };

  const getLocalStorage = (pStringKey: string): Todo[] | null => {
    const data = localStorage.getItem(pStringKey);
    return data ? JSON.parse(data) : null;
  };

  useEffect(() => {
    const storedTodos = getLocalStorage("todos");
    if (storedTodos) {
      setTodos(storedTodos);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setLocalStorage("todos", todos);
    }
  }, [todos, isLoaded]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
};

export default useLocalStorage;
