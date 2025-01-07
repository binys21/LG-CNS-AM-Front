import "./TodoList.css";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, removeTodo }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}
