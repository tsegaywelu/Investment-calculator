import React from "react";

const boared = [
  [null, null, null],
  [null, "B", "B"],
  [null, null, null],
];

const Gameboared = () => {
  return (
    <div className="bg-green-800 w-1/2 mx-auto">
      {boared.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex">
            {" "}
            {/* Wrapper for each row */}
            {row.map((col, colIndex) => {
              return (
                <button key={colIndex} className="bg-white p-3 m-2">
                  {col}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Gameboared;
