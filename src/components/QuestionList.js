import React from "react";
import Question from "./Question";
import "../Style/Start.css";

const QuestionList = ({ ques, selected }) => {
  const rand = Math.floor(Math.random() * 4);
  const list = ques.map(q => {
    return (
      <div>
        <Question
          question={q.question}
          correct={q.correct_answer}
          answers={q.incorrect_answers}
          selected={selected}
        />
      </div>
    );
  });

  return (
    <div className="list">
      Here are your Questions
      {list}
    </div>
  );
};
export default QuestionList;
