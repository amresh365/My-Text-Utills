import Main from "./My Component/Main";
import Nav from "./My Component/Nav";
import About from "./My Component/About";
import Alert from "./My Component/Alert";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({});

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert({});
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "	#36454F";
      showAlert("Dark Mode Enabled", "Succcess");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Nav title={"Text Utils"} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} mode={mode} />

      <Routes>
        <Route
          path="/"
          element={
            <Main head={"Enter The Text"} showAlert={showAlert} mode={mode} />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* <About /> */}
    </>
  );
}
export default App;
