import React from "react";
import "../Style/Start.css";
const Result = ({ score, playagain, amount, difficulty, category }) => {
  return (
    <div className="list">
      <h1>Report card&#129312;</h1>
      <h2>NUMBER OF QUESTIONS :{amount}</h2>
      <h2>CATEGORY : {category}</h2>
      <h2> DIFFICULTY: {difficulty}</h2>
      <hr></hr>
      <h1>
        &#10024;YOU SCORED {score}/{amount} &#10024;
      </h1>
      <hr></hr>
      <button className=" ui button" onClick={playagain}>
        click me!!!
      </button>
      to play AGAIN
    </div>
  );
};

export default Result;
