import React from "react";
import { useState } from "react";

const Main = (props) => {
  const [text, setText] = useState("Please Enter Text");
  const handleonClicked = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container">
      <textarea
        type="text"
        className="form-control my-5"
        onChange={handleOnChange}
        value={text}
      />
      <button className="btn btn-primary" onClick={handleonClicked}>
        Convert To Uppercase
      </button>

      <div>
        <h1>Text Summry</h1>
        <p>
          The Lenght of text {text.length} number of word in the text{" "}
          {text.split(" ").length}
        </p>
      </div>
    </div>
  );
};
export default Main;
