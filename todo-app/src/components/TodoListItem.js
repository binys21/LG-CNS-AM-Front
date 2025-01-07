import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.css";

export default ({ todo, removeTodo }) => {
  const { id, checked, text } = todo;
  return (
    <div className="TodoListItem">
      <div className={checked ? "checkBox checked" : "checkBox"}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div class="text">{text}</div>
      </div>
      <div className="remove" onClick={() => removeTodo(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};
