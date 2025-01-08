import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  /*
  const [count, setCount] = useState(0);
  const countPlus = () => setCount(count + 1);
  const countMinus = () => setCount(count - 1);
*/
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <div>
        현재 카운터 값은 <b>{state.count}</b>입니다.
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          하나 더하기
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          하나 빼기
        </button>
      </div>
    </>
  );
};
export default Counter;
