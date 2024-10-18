import React, { useState } from "react";
import image1 from "../assets/lo.webp";

//this component  is called from app with its props
const Userinput = ({ handlechange, userinput }) => {
  return (
    <div className="w-2/3 bg-green-600 mx-auto">
      {/* //image  */}
      <img
        src={image1}
        alt="image ...loading "
        width={200}
        height={200}
        className="mx-auto rounded-full"
      />
      {/* container  */}
      <div className="md:flex ">
        {/* //leftside inputs */}
        <div className=" mx-auto">
          <p className="flex flex-col">
            <label>initail value </label>
            <input
              type="text"
              required
              className="p-2 text-2xl m-3"
              value={userinput.initial}
              onChange={(e) => handlechange("initial", e.target.value)}
            />
          </p>
          <p className="flex flex-col">
            <label>annual value</label>
            <input
              type="text"
              required
              className="p-2 text-2xl m-3"
              onChange={(e) => handlechange("annual", e.target.value)}
              value={userinput.annual}
            />
          </p>
        </div>
        {/* //wright side inputs */}
        <div className="mx-auto">
          <p className="flex flex-col">
            <label>expected value</label>
            <input
              type="text"
              required
              value={userinput.expected}
              className="p-2 text-2xl m-3"
              onChange={(e) => handlechange("expected", e.target.value)}
            />
          </p>
          <p className="flex flex-col">
            <label>duration </label>
            <input
              type="text"
              required
              value={userinput.duration}
              className="p-2 text-2xl m-3"
              onChange={(e) => handlechange("duration", e.target.value)}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Userinput;
