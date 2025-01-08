import { useReducer, useState } from "react";

const reducer = (state, action) => {
  /*
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "nickname":
      return { ...state, nickName: action.value };
    default:
      return state;
  }*/
  return { ...state, [action.type]: action.value };
};

const Info = () => {
  /*
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const changeName = (e) => setName(e.target.value);
  const changeNickName = (e) => setNickName(e.target.value);
  */
  const [state, dispatch] = useReducer(reducer, { name: "", nickName: "" });
  const { name, nickName } = state;
  const changeValue = (e) =>
    dispatch({ type: e.target.name, value: e.target.value });

  return (
    <>
      <div>
        <p>이름: {name}</p>
        <p>별명: {nickName}</p>
      </div>
      <div>
        <p>
          이름:{" "}
          <input type="text" value={name} name="name" onChange={changeValue} />
        </p>
        <p>
          별명:{" "}
          <input
            type="text"
            value={nickName}
            name="nickname"
            onChange={changeValue}
          />
        </p>
      </div>
    </>
  );
};

export default Info;
