import React from "react";

class Start extends React.Component {
  state = {
    amount: 0,
    category: 18,
    difficulty: "easy"
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.starte(this.state);
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label className="label">
              ENTER AMOUNT OF QUESTIONS BELOW '40' &#128591;
            </label>
            <br></br>
            <input
              type="text"
              value={this.state.amount}
              onChange={e => {
                this.setState({ amount: e.target.value });
              }}
            />
          </div>

          <div>
            <label>SELECT CATEGORY&#128226;</label>
            <br></br>
            <select
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
            Enter Difficulty
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
          <input type="submit" value="Start TEST" />
        </form>
      </div>
    );
  }
}

export default Start;
