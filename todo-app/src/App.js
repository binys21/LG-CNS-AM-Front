import { useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, checked: true, text: "자바스크립트 공부하기" },
    { id: 2, checked: false, text: "리액트 공부하기" },
    { id: 3, checked: false, text: "할 일 목록 앱 만들기" },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}
export default App;
