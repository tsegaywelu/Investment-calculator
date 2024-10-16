import React, { useState } from "react";
const boared = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const Gameboared = () => {
  const [gamebo, setgamebo] = useState(boared);
  function updateboared(rowindex, colindex) {
    setgamebo((prev) => {
      const newarray = [...prev.map((innerarray) => [...innerarray])];
      newarray[rowindex][colindex] = "X";

      return newarray;
    });
  }
  return (
    <ol className="w-1/2 mx-auto bg-black mt-9">
      {boared.map((row, rowindex) => (
        <li key={rowindex}>
          <ol className="flex  justify-between  text-white p-3 ">
            {row.map((col, colindex) => (
              <li key={colindex} className=" mx-1 bg-yellow-900 ">
                <button
                  className="bg-blue-700 p-8 m-3 "
                  onClick={() => updateboared(rowindex, colindex)}
                >
                  {gamebo[rowindex][colindex]}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default Gameboared;
