import React from "react";
import "../styles/AboutUsIntroduce.css";
import { FiArrowUpRight } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function AboutUsIntroduce() {
  const IconMap = [
    {
      icon: <AiFillFacebook />,
      href: "https://www.facebook.com/",
    },
    {
      icon: <AiFillInstagram />,
      href: "https://www.instagram.com/",
    },
    { icon: <AiFillGithub />, href: "https://github.com/" },
  ];
  return (
    <>
      {" "}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="aboutUsIntroduceContainer">
          <div className="aboutUsIntroduceMain">
            <div className="aboutUsIntroduceMainHeader">
              <div className="aboutUsIntroduceName">
                <p className="xlText">Bayraa</p>
              </div>
              <div className="aboutUsIntroduceIcon">
                <Link to={"/aboutOwnPage"}>
                  <FiArrowUpRight
                    style={{ color: "white", fontSize: "25px" }}
                  />
                </Link>
              </div>
            </div>
            <div className="whatIsHeDone">
              <p className="WSHDText">Front-End & Backend</p>
            </div>
            <div className="aboutUsIntroduceBIO">
              <p className="BIOText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                est eaque
              </p>
            </div>
            <div className="aboutUsIntroduceFooter">
              {IconMap.map((el, icon) => {
                return (
                  <a
                    href={el.href}
                    rel="noreferrer"
                    target="_blank"
                    style={{
                      color: "white",
                      fontSize: "35px",
                      cursor: "pointer",
                    }}
                    key={icon}
                  >
                    {el.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        {/* sdsd */}
        <div className="aboutUsIntroduceContainer">
          <div className="aboutUsIntroduceMain">
            <div className="aboutUsIntroduceMainHeader">
              <div className="aboutUsIntroduceName">
                <p className="xlText">Bayraa</p>
              </div>
              <div className="aboutUsIntroduceIcon">
                <Link to={"/aboutOwnPage"}>
                  <FiArrowUpRight
                    style={{ color: "white", fontSize: "25px" }}
                  />
                </Link>
              </div>
            </div>
            <div className="whatIsHeDone">
              <p className="WSHDText">Front-End & Backend</p>
            </div>
            <div className="aboutUsIntroduceBIO">
              <p className="BIOText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                est eaque
              </p>
            </div>
            <div className="aboutUsIntroduceFooter">
              {IconMap.map((el, icon) => {
                return (
                  <a
                    href={el.href}
                    rel="noreferrer"
                    target="_blank"
                    style={{
                      color: "white",
                      fontSize: "35px",
                      cursor: "pointer",
                    }}
                    key={icon}
                  >
                    {el.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        {/* asdas */}
        <div className="aboutUsIntroduceContainer">
          <div className="aboutUsIntroduceMain">
            <div className="aboutUsIntroduceMainHeader">
              <div className="aboutUsIntroduceName">
                <p className="xlText">Bayraa</p>
              </div>
              <div className="aboutUsIntroduceIcon">
                <Link to={"/aboutOwnPage"}>
                  <FiArrowUpRight
                    style={{ color: "white", fontSize: "25px" }}
                  />
                </Link>
              </div>
            </div>
            <div className="whatIsHeDone">
              <p className="WSHDText">Front-End & Backend</p>
            </div>
            <div className="aboutUsIntroduceBIO">
              <p className="BIOText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                est eaque
              </p>
            </div>
            <div className="aboutUsIntroduceFooter">
              {IconMap.map((el, icon) => {
                return (
                  <a
                    href={el.href}
                    rel="noreferrer"
                    target="_blank"
                    style={{
                      color: "white",
                      fontSize: "35px",
                      cursor: "pointer",
                    }}
                    key={icon}
                  >
                    {el.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsIntroduce;
