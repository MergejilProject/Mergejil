import React from "react";
import Navbar from "./components/navbar";
import Instructor from "./pages/InstracturPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InformationSidebar from "./components/InformationSidebar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/Instructor" element={<Instructor />}></Route>
          <Route path="/footer" element={<InformationSidebar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
