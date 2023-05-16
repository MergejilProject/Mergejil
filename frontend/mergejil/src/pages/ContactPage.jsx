import React from "react";
import "../styles/ContactPage.css";
import PageHeadersNavbar from "../components/PageHeadersNavbar";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { GiEarthAfricaEurope } from "react-icons/gi";
import Button from "react-bootstrap/Button";

function ContactPage() {
  return (
    <>
      {" "}
      <div className="contactPageContainer">
        <div className="contactPageHeader">
          <PageHeadersNavbar />
        </div>
        <div className="contactPageMainContainer">
          <div className="contactPageMain">
            <div className="contactSectionOne">
              <div className="contactSectionOneRight">
                <div className="contactSectionOneRightHeader">
                  <p className="contactPageTitle text-white">
                    Let's get in touch
                  </p>
                </div>
                <div className="contactSectionOneRightSecondHeader">
                  <p className="contactPageText my-2">
                    We're open for any suggestion or just to have a chat
                  </p>
                </div>
                <div className="contactSectionOneRightLocation">
                  <div className="contactIcon">
                    <MdOutlineLocationOn className="CSORIcon" />
                  </div>
                  <div className="CSORText">
                    <p className="whiteText">Address:</p>
                  </div>
                </div>
                <div className="contactSectionOneRightCall">
                  <div className="contactIcon">
                    <BsTelephone className="CSORIcon" />
                  </div>
                  <div className="CSORText">
                    <p className="whiteText">Phone:</p>
                  </div>
                </div>
                <div className="contactSectionOneRightEmail">
                  <div className="contactIcon">
                    <FiSend className="CSORIcon" />
                  </div>
                  <div className="CSORText">
                    <p className="whiteText">Email:</p>
                  </div>
                </div>
                <div className="contactSectionOneRightWeb">
                  <div className="contactIcon">
                    <GiEarthAfricaEurope className="CSORIcon" />
                  </div>
                  <div className="CSORText">
                    <p className="whiteText">Website:</p>
                  </div>
                </div>
              </div>
              <div className="contactSectionOneleft">
                <div className="contactSectionOneleftHeader">
                  <p className="contactPageTitle">Get in touch</p>
                </div>
                <div className="CSOLInputContainer2">
                  <div className="CSOLInput1Conainer">
                    <div className="CSOLTContainer">
                      <p className="CSOLBlueText">FULL NAME</p>
                    </div>
                    <input
                      className="CSOLInput1"
                      type="text"
                      placeholder="Name"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="CSOLInputConainer">
                    <div className="CSOLTContainer">
                      <p className="CSOLBlueText">FULL NAME</p>
                    </div>
                    <input
                      className="CSOLInput1"
                      type="text"
                      placeholder="Name"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="CSOLInputContainer1">
                  <div className="CSOLTContainer">
                    <p className="CSOLBlueText">SUBJECT</p>
                  </div>
                  <input
                    placeholder="Subject"
                    className="CSOLInput"
                    type="text"
                  />
                </div>
                <div className="CSOLInputContainer3 h-30">
                  <div className="CSOLTContainer">
                    <p className="CSOLBlueText text-center">MESSAGE</p>
                  </div>

                  <div className="form-control">
                    <textarea
                      className="textarea textarea-bordered h-24 w-100"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="my-2">
                  <button className="btn btn-primary">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
