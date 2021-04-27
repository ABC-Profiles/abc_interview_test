import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <form id="form">
          <label htmlFor="username">Name of User</label>
          <input type="text" id="username" />

          <label htmlFor="job">Job</label>
          <input type="text" id="job" />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
