import React from "react";
import "./App.css";
import LoginScreen from "./Components/LoginScreen";
import { Router } from "@reach/router";
import Signup from "./Components/Signup";
import Header from "./Components/Header";
import Scenarios from "./Components/Scenarios";

function App() {
  return (
    <div className="App">
      <Header />
      <Router primary={false}>
        <LoginScreen path="/" />
        <LoginScreen path="/login" />
        <Signup path="/signup" />
        <Scenarios path="/scenarios" />
      </Router>
    </div>
  );
}

export default App;
