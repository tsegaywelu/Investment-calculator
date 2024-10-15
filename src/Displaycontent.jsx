import React from "react";
import Add from "./Add";

const Displaycontent = () => {
  return (
    <div>
      <Add
        button={
          <div>
            <div>how to send this uing the button </div>
            <div>how to send this uing the button </div>
            <div>how to send this uing the button </div>
            <div>how to send this uing the button </div>
          </div>
        }
      />

      <Add Container={"div"}>
        <p>send this warper prop </p>
        <p>send this warper prop </p>
        <p>send this warper prop </p>
        <p>send this warper prop </p>
      </Add>
    </div>
  );
};

export default Displaycontent;
