import React from "react";
// import questions from "./API/questions";
import Header from "./components/Header";
import QuestionList from "./components/QuestionList";
import Result from "./components/Result";
import Start from "./components/Start";
import Trivia from "./API/Trivia";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
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

  // start = flag => {
  //   if (flag === true) {
  //     this.setState({
  //       start: true
  //     });
  //   }
  // };

  starte = async term => {
    console.log(term);
    const response = await Trivia.get("/api.php", {
      params: {
        amount: term.amount,
        category: term.category,
        difficulty: term.difficulty
      }
    });
    this.setState({ questions: response.data.results, start: true });
  };

  render() {
    return (
      <div className={"container"}>
        <Start starte={this.starte} />
        {this.state.questions.length}

        {this.state.finish === false && this.state.start === true && (
          <QuestionList ques={this.state.questions} selected={this.selected} />
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
