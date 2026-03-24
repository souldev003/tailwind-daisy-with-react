import { useState } from "react";

export default function ButtonCount() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
