import React, { useState } from "react";

function CounterComp() {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("Arun");

  const handleadd = () => {
    setcount(count + 1);
  };

  return (
    <div>
      <h2>Count : {count}</h2>
      {name}
      <button onClick={handleadd}>Add </button>

<input/>

dweewew
      dcjkasdjasdjgdfjkgsadfjkasdfkjfakjg
    </div>
  );
}

export default CounterComp;

// Hooks
