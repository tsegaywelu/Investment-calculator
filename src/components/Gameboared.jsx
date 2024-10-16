import React, { useState } from "react";
const boared = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const Gameboared = ({ activeis, activesymbol }) => {
  const [gamebo, setgamebo] = useState(boared);
  let [fullspace, setfulspace] = useState();

  function updateboared(rowindex, colindex) {
    if (gamebo[rowindex][colindex] != null) {
      alert("this space is catched ", activesymbol);
      setfulspace(
        <p className="bg-white font-extrabold text-2xl text-red-800">
          this space is catched by {activesymbol}!
        </p>
      );
      return;
    }
    setfulspace();
    setgamebo((prev) => {
      const newarray = [...prev.map((innerarray) => [...innerarray])];
      newarray[rowindex][colindex] = activesymbol;
      check(newarray, activesymbol);
      return newarray;
    });

    activeis();
  }

  function check(updateboared, activesymbol) {
    console.log("i am executing always ");
    for (let i = 0; i < 3; i++) {
      if (
        updateboared[i][0] == activesymbol &&
        updateboared[i][1] == activesymbol &&
        updateboared[i][2] == activesymbol
      ) {
        console.log("there is winner at row");
        gameend(activesymbol);
        //return;
      }
      if (
        updateboared[0][i] == activesymbol &&
        updateboared[1][i] == activesymbol &&
        updateboared[2][i] == activesymbol
      ) {
        console.log("there is winner at column");
        gameend(activesymbol);
        //return;
      }
    }
    if (
      updateboared[0][0] == activesymbol &&
      updateboared[1][1] == activesymbol &&
      updateboared[2][2] == activesymbol
    ) {
      console.log("winner on diagonal");
      gameend(activesymbol);
      //return;
    }
    if (
      updateboared[0][2] == activesymbol &&
      updateboared[1][1] == activesymbol &&
      updateboared[2][0] == activesymbol
    ) {
      console.log("winner on diagonal");
      gameend(activesymbol);
      //return;
    }
  }

  function gameend(activesymbol) {
    alert("congratulation the game finished by", activesymbol);
    console.log(`the game wonned by ${activesymbol}`);
  }

  return (
    <ol className="w-3/2 mx-auto bg-black mt-9 sm:w-full">
      {gamebo.map((row, rowindex) => (
        <li key={rowindex}>
          <ol className="flex  justify-between  text-white p-3 ">
            {row.map((col, colindex) => (
              <li key={colindex} className=" mx-1 bg-yellow-900 ">
                <button
                  className="bg-blue-700 p-8 m-3 "
                  onClick={() => updateboared(rowindex, colindex)}
                >
                  {gamebo[rowindex][colindex] || " "}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
      {fullspace}
    </ol>
  );
};

export default Gameboared;
