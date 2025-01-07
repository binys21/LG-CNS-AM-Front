import { useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import TodoProvider from "./TodoProvider";

function App() {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoInsert insertTodo={insertTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      </TodoTemplate>
    </TodoProvider>
  );
}
export default App;
