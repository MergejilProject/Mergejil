import React from "react";
import "../styles/AboutUsOwnPage.css";
import { motion } from "framer-motion";
import { useState } from "react";

function AboutUsOwnPage() {
  return (
    <>
      <div className="AboutUsOwnPageContainer">
        <div className="ownPageProfileContainer">
          <div className="ownPageProfile"></div>
        </div>
        <div className="AboutUsOwnPageMainContainer">
          <div className="AboutUsOwnPageMain">
            <div className="AboutUsOwnPageMainHeader">
              <div className="AUOPMHNameTextContainer">
                <p className="AUOPMHNameText">- I'M BATBAYR.</p>
              </div>
              <div className="AUOPMHRoleTextContainer">
                <p className="AUOPMHRoleText"> WEB DEVELOPER</p>
              </div>
            </div>
            <div className="AUOPMdescriptionContainer">
              <p className="AUOPMHText">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem aliquam dolores ad magnam repellendus aut ratione
                nemo aperiam quisquam quis ex dolorum sed cupiditate
                necessitatibus voluptatibus perspiciatis eveniet impedit cumque
                soluta, architecto ipsam. Sed, aliquam sit rem vero
                necessitatibus perferendis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsOwnPage;
