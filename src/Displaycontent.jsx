import React from "react";

const Displaycontent = () => {
  const myobject = {
    name: "tsegay",
    age: 67,
    country: "eretria",
  };
  return (
    <div>
      <h1>we are on the Displaycontent page </h1>
      {Object.values(myobject).map((x) => (
        <p key={x}>{x}</p>
      ))}
    </div>
  );
};

export default Displaycontent;
