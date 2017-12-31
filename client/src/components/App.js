import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "../style/App.css";

import Header from "./Header";
import Food from "./Food";
import Drinks from "./Drinks";

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
