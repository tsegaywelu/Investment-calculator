import React from "react";
import Totalinvestment from "../components/Totalinvestment";

const Calculateinve = ({ investmentvalue }) => {
  console.table(investmentvalue);
  return (
    <div>
      <Totalinvestment allvalues={investmentvalue} />
    </div>
  );
};

export default Calculateinve;
