import { MdAdd } from "react-icons/md";
import "./TodoInsert.css";
import { useState } from "react";

const TodoInsert = ({ insertTodo }) => {
  const [value, setValue] = useState("");
  const changeValue = (e) => setValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    insertTodo(value);
    setValue("");
  };

  return (
    <form className="TodoInsert" onClick={onSubmit}>
      <input
        type="text"
        placeholder="할일을 입력하세요."
        value={value}
        onChange={changeValue}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
export default TodoInsert;
