import { useState } from "react";
import "./App.css";
import Main from "./My Component/Main";
import Nav from "./My Component/Nav";

function App() {
  return (
    <>
      <Nav title={"UpperCase Converter"} />
      <Main head={"Enter The Text"} />
    </>
  );
}
export default App;
