import React from "react";
import Question from "./Question";

const QuestionList = ({ ques, selected }) => {
  const rand = Math.floor(Math.random() * 4);
  const list = ques.map(q => {
    return (
      <Question
        question={q.question}
        correct={q.correct_answer}
        answers={q.incorrect_answers}
        selected={selected}
      />
    );
  });

  return <div>{list}</div>;
};
export default QuestionList;
