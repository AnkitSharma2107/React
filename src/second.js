import { useState } from "react";
import Counter from "./counter";
import FirstComp from "./first-comp";

function SecondComp() {
  const [name, setName] = useState("SpiderMan");

  function changeHeroFun() {
    console.log("Check test");

    setName("ShaktiMaan");
  }

  return (
    <>
      <h1>This is my second component</h1>
      My hero is {name}
      <br></br>
      <button onClick={changeHeroFun}>Change Hero</button>
    </>
  );
}

export default SecondComp;
