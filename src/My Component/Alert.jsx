import React from "react";

const Alert = (props) => {
  return (
    props.alert.message && (
      <div className="container">
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>{props.alert.message} </strong>
          {props.alert.type}
        </div>
      </div>
    )
  );
};

export default Alert;
