import "./App.css";
import Main from "./My Component/Main";
import { useState } from "react";
import navbar from "./My Component/navbar";
import body from "./My Component/body";

function App() {
  return (
    <>
      <body />
      <navbar />
      <Main />
      <div className="container">
        <button className="btn" onClick={""}>
          click
        </button>
      </div>
    </>
  );
}
export default App;
