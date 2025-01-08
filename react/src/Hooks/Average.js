import { useRef, useState } from "react";

export default function Average() {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);
  const changeNumber = (e) => setNumber(e.target.value);
  const changeList = () => {
    newList = list.concat(number);
    setList(newList);
    setNumber("");
    refNumber.current.focus();
  };

  const refNumber = useRef();
  return (
    <>
      <div>
        <input
          ref={refNumber}
          type="text"
          value={number}
          onChange={changeNumber}
        />
        <button>등록</button>
      </div>
      <div>
        <p>입력값:{number}</p>
      </div>
      <div>
        등록된 숫자
        <ul>
          {list.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
