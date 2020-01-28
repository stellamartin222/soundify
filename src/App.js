import React from "react";
import "./App.css";
import LoginScreen from "./Components/LoginScreen";
import { Router } from "@reach/router";
import Signup from "./Components/Signup";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router primary={false}>
        <LoginScreen path="/" />
        <LoginScreen path="/login" />
        <Signup path="/signup" />
      </Router>
    </div>
  );
}

export default App;
