import { useRef, useState } from "react";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, checked: true, text: "자바스크립트 공부하기" },
    { id: 2, checked: false, text: "리액트 공부하기" },
    { id: 3, checked: false, text: "할 일 목록 앱 만들기" },
  ]);

  const nextId = useRef(4);

  const insertTodo = (text) => {
    const newTodos = todos.concat({ id: nextId, checked: false, text });
    setTodos(newTodos);
    nextId.current++;
  };

  return (
    <TodoTemplate>
      <TodoInsert insertTodo={insertTodo} />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}
export default App;
