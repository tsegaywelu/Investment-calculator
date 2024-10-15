import React, { useState } from "react";

export const Add = () => {
  const [feedback, setfeedback] = useState("");
  function handleit(e) {
    setfeedback(e.target.value);
  }
  return (
    <div className="bg-yellow-500">
      {feedback}
      <h1>tell us what is on your maind please and let we know it </h1>
      <input type="text" value={feedback} onChange={handleit} />
    </div>
  );
};
