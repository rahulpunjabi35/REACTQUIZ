import React, { useState } from "react";
var x = Math.floor(Math.random() * 4);
const Question = ({ question, answers, correct, selected }) => {
  const [answer, SetAnswer] = useState("");
  const [done, setDone] = useState("");
  let flag = false;
  console.log(x);

  const anslist = answers.map(ans => {
    return (
      <div>
        <button
          className={"btn btn-primary"}
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
