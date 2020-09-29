import React, { useCallback, useEffect, useRef, useState } from "react";

const SimpleHabit = props => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  //   componentDidMount & componentDidUpdate 결합
  // default는 계속 호출.
  //  정보 추가시 정보가 변경될때 마다 호출.
  // 빈 배열을 넣으면 처음 mount 때만 호출.
  useEffect(() => {
    console.log(`mounted & updated: ${count}`);
  }, [count]);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
