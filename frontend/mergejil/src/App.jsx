import React from "react";
import Navbar from "./components/navbar";

import Instructor from "./pages/InstracturPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Overlay from "./components/overlay";
import Section from "./components/section";
import Login from "./components/Login";
function App() {
  return (
    <>
      {/* <div style={{ backgroundColor: "gray", width: "100%", height: "100vh" }}>

        {/* <Navbar/> */}
      {/* </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/Instructor" element={<Instructor />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
      {/* <Section /> */}
      <Login />
    </>
  );
}

export default App;
