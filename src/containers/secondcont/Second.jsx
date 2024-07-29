import React from "react";
import { LongLogoPara, Paragraph } from "../../components";
import circles from "../../components/images/Circles.svg";
import mobR from "../../components/images/iPhone-13-Pro-FrontFromt.png";
import feature from "../../components/images/features.png";
import paraPic1 from "../../components/images/star-05.png";
import paraPic2 from "../../components/images/cube-02.png";
import paraPic3 from "../../components/images/cube-04.png";
import blackst from "../../components/images/blackstarmob.png";
import grand from "../../components/images/gradient.svg";
import "./second.css";
function Second() {
  const headings = "Budgeting Intervals";
  const paragraphs =
    "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem ";

  return (
    <div className="second-main">
      <div className="left-img ">
        <img src={circles} alt="" className="circles w-full" />
        <img src={mobR} alt="" className="mobR absolute" />
        <img src={grand} alt="" className="grandss" />
        <img src={blackst} alt="" className="grandss22" />
      </div>
      <div className="right-txt">
        <div className="right-txt-data">
          <div className="feature-img-sec">
            <img src={feature} alt="featureimage" />
          </div>
          <div className="main-heading22">Uifry Premium</div>
          <div className='para-container-hello'>
   <div className="logo-sec-hello"><div className="logo-img-hello"><img src={paraPic1} alt='' /></div><div className="logo-txt-hello">Budgeting Intervals</div></div>
    </div>
            <Paragraph paras={paragraphs} />
          <div className="dispara">
            <LongLogoPara headings={headings} parapic={paraPic2} />
            <Paragraph paras={paragraphs} />
          </div>
          <div className='para-container-hello'>
   <div className="logo-sec-hello"><div className="logo-img-hello"><img src={paraPic1} alt='' /></div><div className="logo-txt-hello">Budgeting Intervals</div></div>
    </div>
          <Paragraph paras={paragraphs} />
          <img src={grand} alt="" className="grandss1" />
        </div>
      </div>
    </div>
  );
}

export default Second;
