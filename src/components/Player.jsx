import React, { useState } from "react";

const Player = ({ playername: initialplayername, playersymbol }) => {
  const [isediting, setisediting] = useState(false);
  const [playername, setplayername] = useState(initialplayername);

  let content = (
    <span
      id="player"
      className="pl-20 pr-20  inline-block font-extrabold text-black uppercase"
    >
      {playername}
    </span>
  );
  if (isediting) {
    content = (
      <input
        type="text"
        className="p-1"
        onChange={(e) => setplayername(e.target.value)}
        defaultValue={playername}
        required
      />
    );
  }

  return (
    <div className="flex justify-evenly ">
      <ol className="flex">
        <li className="flex ">
          {content}
          <span id="player-symbol" className="ml-3">
            {playersymbol}
          </span>
        </li>
        {!isediting && (
          <button
            className="ml-5 bg-black text-white p-1   rounded-lg"
            onClick={(e) => setisediting(true)}
          >
            edit
          </button>
        )}

        {isediting && (
          <button
            className="ml-5 bg-black text-white   rounded-lg"
            onClick={(e) => setisediting(false)}
          >
            save
          </button>
        )}
      </ol>
    </div>
  );
};

export default Player;
