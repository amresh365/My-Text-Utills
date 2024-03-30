import React from "react";

const Main = (props) => {
  return (
    <div>
      <h1>Main</h1>
      <h1>
        {props.userP}
        {props.userq}
      </h1>
    </div>
  );
};

export default Main;
