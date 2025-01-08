import { useState } from "react";

const CounterWithLocalVariable = () => {
  const [count, setCount] = useState(0);
  let intervalId = 0;
  const startCounter = () => {
    intervalId = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    console.log(`카운터 시작...intervalId:${intervalId}`);
  };
  const stopCounter = () => {
    clearInterval(intervalId);
    console.log(`카운터 정지...intervalId:${intervalId}`);
  };

  return (
    <>
      <p>카운트: {count}</p>
      <button onClick={startCounter}>시작</button>
      <button onClick={stopCounter}>정지</button>
    </>
  );
};

const CounterWithStateVariable = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setInterId] = useState(0);

  const startCounter = () => {
    const id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    setInterId(id);
    console.log(`카운터 시작... intervalId: ${intervalId}`);
  };

  const stopCounter = () => {
    clearInterval(intervalId);
    console.log(`카운터 정지... intervalId: ${intervalId}`);
  };
  return (
    <>
      <p>카운트:{count}</p>
      <button onClick={startCounter}>시작</button>
      <button onClick={stopCounter}>정지</button>
    </>
  );
};

const CounterWithRefVariable = () => {
  const [coutn, setCount] = useState(0);
  const intervalId = useRef(0);

  const startCounter = () => {
    intervalId.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    console.log(`카운너 시작,,,intervalId:${intervalId.current}`);
  };

  const stopCounter = () => {
    clearInterval(intervalId.current);
    console.log(`카운터 정지...intervalId:${intervalId.current}`);
  };
};

export default () => {
  return (
    <>
      <CounterWithLocalVariable />
      <CounterWithStateVariable />
      <CounterWithRefVariable />
    </>
  );
};
