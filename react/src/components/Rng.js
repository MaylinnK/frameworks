import React, { useState } from "react";
import Rounded from "./Rounded";

function Rng() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Random number generator</h1>
      <button onClick={() => setCount(Math.random())}>Generate</button>
      {count !== 0 && <><p>{count}</p><Rounded number={count} /></>}
    </div>
  );
}

export default Rng;
