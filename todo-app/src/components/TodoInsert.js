import { MdAdd } from "react-icons/md";
import "./TodoInsert.css";

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input type="text" placeholder="할일을 입력하세요." />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
export default TodoInsert;
