import "./TodoList.css";
import TodoListItem from "./TodoListItem";

export default function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}
