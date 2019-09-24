import React from "react";

const Result = ({ score, playagain }) => {
  return (
    <div>
      CONGRATULATIONS!!!!&#129312;
      <h1>&#10024;YOU SCORED {score}/8 &#9996;</h1>
      <button onClick={playagain}>click me!!!</button>to play AGAIN
    </div>
  );
};

export default Result;
