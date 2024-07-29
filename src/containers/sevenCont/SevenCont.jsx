import React from "react";
import "./sevencont.css";
import { Heading, Paragraph, Button } from "../../components";
import white from "../../components/images/whitecircles.svg";
import white2 from "../../components/images/whitecircle2.svg";
import Apple from "../../components/images/apple.svg";
import { mob1, mob2, mob3, mobGrand, upGrand, star1, blackst } from ".";
function SevenCont() {
  const headings = "Ready To Get Started?";
  const para =
    "Risus habitant leo egestas mauris diam eget morbi tempus vulputate.";
  return (
    <div className="main-seven-cont">
      <div className="mob-blackst">
        <img src={blackst} alt="" />
      </div>
      <div className="mob-blackst2">
        <img src={blackst} alt="" />
      </div>
      <div className="mob-grand2">
        <img src={upGrand} alt="" />
      </div>
      <div className="white-cir">
        <img src={white} alt="elippes" />
      </div>
      <div className="white-cir2">
        <img src={white2} alt="elippes" />
      </div>
      <div className="seven-data ">
        <div className="seven-left">
          <Heading heading={headings} />
          <Paragraph paras={para} />
          <Button title="Download App" imgs={Apple} />
          <div className="mob-star2">
            <img src={star1} alt="" />
          </div>
        </div>
        <div className="seven-right ">
          <div className="mob-img1">
            <img src={mob1} alt="" />
          </div>
          <div className="mob-img2">
            <img src={mob2} alt="" />
          </div>
          <div className="mob-img3">
            <img src={mob3} alt="" />
          </div>
          <div className="mob-grand">
            <img src={mobGrand} alt="" />
          </div>
          <div className="mob-star">
            <img src={star1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SevenCont;
