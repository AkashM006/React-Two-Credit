import React from "react";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <div>
        <img src={process.env.PUBLIC_URL + "/logo512.png"} alt="React logo" />
        <br />
        <button>Click me!</button>
      </div>
    );
  }
}

export default Main;
