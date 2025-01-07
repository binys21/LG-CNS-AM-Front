import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.css";
import { useContext } from "react";
import TodoContext from "../TodoContext";

export default ({ todo }) => {
  const { id, checked, text } = todo;
  const { removeTodo, toggleTodo } = useContext(TodoContext);
  return (
    <div className="TodoListItem">
      <div
        className={checked ? "checkBox checked" : "checkBox"}
        onClick={() => toggleTodo(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div class="text">{text}</div>
      </div>
      <div className="remove" onClick={() => removeTodo(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};
