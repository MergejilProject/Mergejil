import React from "react";
import "../styles/mergejilHeader.css";
import Navbar from "../components/navbar";
function mergejilHeader() {
  return (
    <>
      <div className="mergejilHeaderContainer">
        <Navbar />
        <div className="mergejilHeaderContentContainer">
          <div className="mergejilHeaderContentTop">
            <p className="mergejilHeaderContentTopText">
              Мэргэжлээ мэргэлцгээе залуусаа
            </p>
          </div>
          <div className="mergejilHeaderContentSecond">
            <p className="mergejilHeaderContentSecondText">
              Мэргэжлээ эртнээс сурж мэдэж танилцана гэдэг амжилттай явах гол
              үндэс суурь болдог.
            </p>
            <button className="mergejilHeaderContentSecondButton">
              Мэргэжил мэргэлэх
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default mergejilHeader;
