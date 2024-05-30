import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BsFillHeartbreakFill } from "react-icons/bs";

function NameHide() {
  const [breakHeart, setBreakHeart] = useState(false);

  const handlebreak = () => {
    setBreakHeart(true);
  };
  return (
    <div>
      {breakHeart ? <BsFillHeartbreakFill /> : <FaRegHeart />}

      <br />
      <br />
      <button onClick={handlebreak}>Break</button>
      <br />
      <br />
    </div>
  );
}

export default NameHide;
