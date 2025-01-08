import { useMemo, useRef, useState } from "react";

export default function Average() {
  const [number, setNumber] = useState("");
  const [list, setList] = useState([]);
  const changeNumber = (e) => setNumber(e.target.value);
  const changeList = () => {
    newList = list.concat(Number(number));
    setList(newList);
    setNumber("");
    refNumber.current.focus();
  };

  const getAverage = (numbers) => {
    console.log("평균값 계산 중...");
    if (numbers.length === 0) return 0;
    const total = numbers.reduce((prev, curr) => prev + curr);
    return total / numbers.length;
  };

  const refNumber = useRef();
  const avg = useMemo(() => getAverage(list), [list]);
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
        <p> 평균값:{avg}</p>
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
