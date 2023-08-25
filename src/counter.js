import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [heading, setHeading] = useState("This Is My Counter");

  function addCount() {
    console.log("check add");

    if (count == 10) {
      setHeading("Hurray You Have Reach The Last Point");
    }
    if (count < 10) {
      setCount(count + 1);
    }
  }
  function subCount() {
    console.log("check sub");
    if (count <= 10) {
      setHeading("This Is My Counter");
    }
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <h1>
        {heading} : {count}
      </h1>

      <button className="First" onClick={addCount}>
        +
      </button>
      <button className="Second" onClick={subCount}>
        -
      </button>
    </>
  );
}

export default Counter;
