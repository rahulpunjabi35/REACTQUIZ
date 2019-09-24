import React, { useState } from "react";

const Question = ({ question, answers, correct, selected }) => {
  const [answer, SetAnswer] = useState("");
  const [done, setDone] = useState("");
  let flag = false;
  const anslist = answers.map(ans => {
    return (
      <div>
        <button
          className={"btn btn-primary"}
          onClick={() => {
            SetAnswer(ans);
            if (ans === answers[correct - 1]) {
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
