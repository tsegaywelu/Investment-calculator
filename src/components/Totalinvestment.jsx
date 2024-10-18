import React from "react";

const Totalinvestment = ({ allvalues }) => {
  const actualvalue = Object.values(allvalues).map((x) => x * 3);
  const mykeys = Object.keys(allvalues);

  return (
    <div>
      {actualvalue.map((value, index) => (
        <div className="w-2/3 mx-auto font-normal" key={index}>
          <div className="  flex justify-evenly  ">
            <div className="border-spacing-1 ">{mykeys[index]}</div>
            <div className="border-1 border-green-600">{value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Totalinvestment;
