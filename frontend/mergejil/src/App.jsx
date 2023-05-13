import React from "react";
import Navbar from "./components/navbar";
import Instructor from "./pages/InstracturPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InformationSidebar from "./components/InformationSidebar";
import ContactPage from "./pages/ContactPage";
import PageHeadersNavbar from "./components/PageHeadersNavbar";
import HomeInformation from "./components/homeInformation";
import AboutUsIntroduce from "./components/AboutUsIntroduce";
import AboutUsOwnPage from "./components/AboutUsOwnPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutUsIntroduce />}></Route>
          <Route path="/Instructor" element={<Instructor />}></Route>
          <Route path="/footer" element={<InformationSidebar />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/header" element={<PageHeadersNavbar />}></Route>
          <Route path="/aboutOwnPage" element={<AboutUsOwnPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
