import React, { Component } from "react";
import logo from "./gwangmun.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sepio</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <form
            className="form"
            method="get"
            action="http://dev-env.jjdnmu7tuc.us-west-1.elasticbeanstalk.com"
          >
            <input type="text" name="recipientName" defaultValue="Anonymous" />
            <input
              type="text"
              name="recipientEmail"
              defaultValue="test@email.com"
            />
            <button type="submit" style={{marginTop: 30}}>Sign Waiver</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
