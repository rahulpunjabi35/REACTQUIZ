import React from "react";
import Question from "./Question";

const QuestionList = ({ ques, selected }) => {
  const list = ques.map(q => {
    return (
      <Question
        question={q.question}
        correct={q.correct}
        answers={q.answers}
        selected={selected}
      />
    );
  });

  return <div>{list}</div>;
};
export default QuestionList;
