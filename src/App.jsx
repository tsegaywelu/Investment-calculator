import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Header from "./components/Header";
import Userinput from "./pages/Userinput";
import { useState } from "react";
import Calculateinve from "./pages/Calculateinve";
const App = () => {
  const [userinput, setuserinput] = useState({
    initial: 1000,
    annual: 1200,
    expected: 6,
    duration: 10,
  });

  //hanlde new invetment value
  function handlechange(theupdatevalue, newvalue) {
    setuserinput((prev) => {
      return { ...prev, [theupdatevalue]: +newvalue };
    });
  }
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/fill" element={<Userinput />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      {userinput.initial}
      <Userinput handlechange={handlechange} userinput={userinput} />
      <Calculateinve investmentvalue={userinput} />
    </>
  );
};

export default App;
