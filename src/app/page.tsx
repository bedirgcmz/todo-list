import React from "react";
import TodoList from "../components/TodoList";
import GlobalStyles from "../Styles/GlobalStyles";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <TodoList />
    </>
  );
}
