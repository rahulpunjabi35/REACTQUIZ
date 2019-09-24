import React from "react";
class Header extends React.Component {
  render() {
    const start = this.props.start;
    return (
      <div>
        <h1>WELCOME TO YOUR QUIZ </h1>
        <button
          className={"btn btn-info"}
          onClick={() => {
            start(true);
          }}
        >
          Start the test
        </button>
      </div>
    );
  }
}

export default Header;
