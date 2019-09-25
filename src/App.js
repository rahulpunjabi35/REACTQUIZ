import React from "react";
// import questions from "./API/questions";
import Header from "./components/Header";
import QuestionList from "./components/QuestionList";
import Result from "./components/Result";
import Start from "./components/Start";
import Trivia from "./API/Trivia";
import "./Style/Start.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      category: "",
      difficulty: "easy",
      questions: [],
      score: 0,
      start: false,
      finish: false
    };
  }
  playagain = () => {
    this.setState({
      number: 0,
      category: "",
      difficulty: "easy",
      questions: [],
      score: 0,
      start: false,
      finish: false
    });
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
    this.setState({
      questions: response.data.results,
      start: true,
      number: term.amount,
      category: response.data.results[0].category,
      difficulty: term.difficulty
    });
  };

  render() {
    return (
      <div className={"container"}>
        {this.state.start === false && <Start starte={this.starte} />}

        {this.state.finish === false && this.state.start === true && (
          <QuestionList ques={this.state.questions} selected={this.selected} />
        )}

        {this.state.finish === false && this.state.start === true && (
          <div className="btnn">
            <button className="ui button center" onClick={this.finishTest}>
              Finish Test
            </button>
          </div>
        )}

        {this.state.finish === true && (
          <Result
            amount={this.state.number}
            score={this.state.score}
            playagain={this.playagain}
            category={this.state.category}
            difficulty={this.state.difficulty}
          />
        )}
      </div>
    );
  }
}
export default App;
