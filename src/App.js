import React from "react";
import "./App.scss";
import Assessments from "./components/Assessments";
import GlobalState from "./context/GlobalState";

export default function App() {
  return (
    <GlobalState>
      <div className="App">
        <Assessments />
      </div>
    </GlobalState>
  );
}
