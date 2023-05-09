import React from "react";
import Navbar from "./components/navbar";
import Instructor from "./pages/InstracturPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoursePage from "./pages/CoursePage";

// import Section from "./components/section";
import SignUp from "./pages/SignUpPage";

import Container from "react-bootstrap/Container";
import Overlay from "./components/overlay";
import Section from "./components/section";
import RecentPost from "./components/recentPost";
import Testimonial from "./components/testimonial";

function App() {
  return (
    <>
      {/* <RecentPost /> */}
      {/* <div style={{ backgroundColor: "gray", width: "100%", height: "100vh" }}>

        <Navbar />
      </div>  */}

      {/* <Navbar />
      <Section /> */}

      {/* <Navbar/> */}
      {/* </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/Instructor" element={<Instructor />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Course" element={<CoursePage />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <Navbar /> */}
      {/* </div> */}
      {/* <Overlay /> */}
      {/* <Section /> */}
      {/* <Testimonial /> */}
      {/* <Section /> */}
    </>
  );
}

export default App;
