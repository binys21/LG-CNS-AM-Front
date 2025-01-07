import { useContext } from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";
import TodoContext from "../TodoContext";

export default function TodoList({ todos }) {
  const { todos } = useContext(TodoContext);
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
