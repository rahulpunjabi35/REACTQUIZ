import React, { useState, useEffect } from "react";

const Question = ({ question, answers, correct, selected }) => {
  const [answer, SetAnswer] = useState("");
  const [done, setDone] = useState("");
  const [set, setSet] = useState(0);
  let flag = false;
  if (set === 0) {
    const rand = Math.floor(Math.random() * 4);
    console.log(rand);
    answers.splice(rand, 0, correct);
    setSet(1);
  }
  const anslist = answers.map(ans => {
    return (
      <div>
        <button
          className={"ui button"}
          onClick={() => {
            SetAnswer(ans);
            if (ans === correct) {
              if (done === "") {
                flag = true;
                selected(flag);
                setDone("done");
              }
            }
          }}
        >
          {ans}
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1>{question}</h1>
      {anslist}
      your answer:{answer}
    </div>
  );
};
export default Question;
