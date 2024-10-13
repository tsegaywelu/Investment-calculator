import React, { useState } from "react";
//i am on the main
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Displaycontent from "./Displaycontent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Displaycontent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
