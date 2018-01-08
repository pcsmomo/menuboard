import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../style/app.css";

import Header from "./board/Header";
import Food from "./board/Food";
import Drinks from "./board/Drinks";

class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Food />
      </div>
    );
  }
}

export default App;
