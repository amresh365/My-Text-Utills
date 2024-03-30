import logo from "./logo.svg";
import "./App.css";
import Header from "./My Component/Header";
import Main from "./My Component/Main";
import { useState } from "react";
function App() {
  const [userA, setfirst] = useState("amresh");
  const [secondName, setsecond] = useState("gupta");
  return (
    <>
      <Header />
      <Main userP={userA} userq={secondName} />
      <div className="">Amresh</div>
    </>
  );
}
export default App;
