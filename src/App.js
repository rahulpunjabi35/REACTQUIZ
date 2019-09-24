import React from "react";
import questions from "./API/questions";
import Header from "./components/Header";
import QuestionList from "./components/QuestionList";
import Result from "./components/Result";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: questions,
      score: 0,
      start: false,
      finish: false
    };
  }
  playagain = () => {
    this.setState({ score: 0, finish: false });
  };
  finishTest = () => {
    this.setState({
      finish: true
    });
  };
  selected = flag => {
    if (flag === true) {
      this.setState({ score: this.state.score + 1 });
    }
  };

  start = flag => {
    if (flag === true) {
      this.setState({
        start: true
      });
    }
  };
  render() {
    return (
      <div className={"container"}>
        <Header start={this.start} />
        {this.state.finish === false && this.state.start === true && (
          <QuestionList ques={questions} selected={this.selected} />
        )}

        {this.state.finish === false && this.state.start === true && (
          <button onClick={this.finishTest}>Finish Test</button>
        )}

        {this.state.finish === true && (
          <Result score={this.state.score} playagain={this.playagain} />
        )}
      </div>
    );
  }
}
export default App;
