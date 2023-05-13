import React from "react";
import "../styles/ProfessionPage.css";
import Navbar from "../components/navbar";
import Course from "../pages/CoursePage";
import Footer from "../components/Footer";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
function ProfessionPage() {
  return (
    <>
      <div className="ProfessionPageNavbarContainer">
        <Navbar />
      </div>
      <div className="ProfessionPageCourseContainer">
        <div className="courseSearchContainer">
          <IoIosArrowBack className="cousreSearchIcon" />
          <input
            type="text"
            placeholder="Мэргэжил хайх"
            className="courseSearchInput"
          />
          <AiOutlineSearch className="courseSearchSearchIcon" />
        </div>
        <Course />
      </div>
      <div className="ProfessionPageFooterContainer">
        <Footer />
      </div>
    </>
  );
}
export default ProfessionPage;
