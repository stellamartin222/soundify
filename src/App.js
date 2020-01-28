import React from "react";
import "./App.css";
import LoginScreen from "./Components/LoginScreen";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Router>
        <LoginScreen path="/login" />
      </Router>
    </div>
  );
}

export default App;
