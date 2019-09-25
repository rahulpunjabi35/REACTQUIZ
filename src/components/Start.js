import React from "react";
import "../Style/Start.css";
class Start extends React.Component {
  state = {
    amount: 10,
    category: 18,
    difficulty: "easy"
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.starte(this.state);
  };
  render() {
    return (
      <div className="ui box">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div>
            <label className="ui label">
              ENTER AMOUNT OF QUESTIONS BELOW '40' &#128591;
            </label>
            <br></br>
            <div className="ui input">
              <input
                type="text"
                value={this.state.amount}
                onChange={e => {
                  this.setState({ amount: e.target.value });
                }}
              />
            </div>
          </div>
          <br></br>

          <div>
            <label className="ui label">SELECT CATEGORY&#128226;</label>
            <br></br>
            <select
              className="selection"
              value={this.state.category}
              onChange={e => {
                this.setState({ category: e.target.value });
              }}
            >
              <option value="18">Computer Science</option>
              <option value="23">History</option>
              <option value="21">Sports</option>
              <option value="13">Entertainment</option>
            </select>
          </div>
          <div>
            <br></br>
            <label className="ui label">ENTER DIFFICULTY &#128226;</label>

            <select
              value={this.state.difficulty}
              onChange={e => {
                this.setState({ difficulty: e.target.value });
              }}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <br></br>
          <input type="submit" value="Start TEST" />
        </form>
      </div>
    );
  }
}

export default Start;
