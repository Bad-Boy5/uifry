import React from 'react'
import './Footer.css'
import{LongLogoPara,FooterList, Button}from '../../components'
import MainLogo from '../../components/images/main-logo-icon.svg'
import Msg from '../../components/images/message-footer.png'
import Phone from '../../components/images/phone-footer.png'
function Footer() {
  const button="Subscribe"
  const heading='Help@Frybix.Com'
  const headings2='+123 456 789'
  const headingList1="Links"
  const liName1="Home"
  const liName2="About Us"
  const liName3="Bookings"
  const liName4="Blog"
  const headingList2="Legal"
  const liName11="Terms Of Use"
  const liName22="Privacy Policy"
  const liName33="Cokkie Policy"
  const headingList3="Product"
  const liName111="Take Hour"
  const liName222="Live Chat"
  const liName333="Reviews"
  const headingList4="Newsletter"
  const liNames="Stay Up To Date"
  return (
    <div className='footer-container'>
<div className="footer-data">
    <div className="footer-upper">
        <div className="sub-footer-cont cont22">
        <div className="upper-heading"><img src={MainLogo} alt="" /></div>
        <div className="lower-data">
        <div className='para-container11'>
   <div className="logo-sec11"><div className="logo-img1122"><img src={Msg} alt="image" /></div><div className="logo-txt11">Help@Frybix.Com</div></div>
    </div>

        <div className='para-container11'>
   <div className="logo-sec11"><div className="logo-img1122"><img src={Phone} alt='' /></div><div className="logo-txt11">+123 456 789</div></div>
    </div>

        </div>
        </div>
        <div className="sub-footer-cont">
          <FooterList headingl={headingList1} lii1={liName1} lii2={liName2} lii3={liName3} lii4={liName4}/>
        </div>

        
        <div className="sub-footer-cont">
          <FooterList headingl={headingList2} lii1={liName11} lii2={liName22} lii3={liName33} />
        </div>


        <div className="sub-footer-cont">
          <FooterList headingl={headingList3} lii1={liName111} lii2={liName222} lii3={liName333}/>
        </div>


        <div className="sub-footer-cont email-cont">
          <FooterList headingl={headingList4} lii1={liNames}/>
          <div className="labels-sec">
            <input type="text" id='name' placeholder='Your email' />
            <Button title={button}/>
          </div>
        </div>

    </div>
    <hr />
    <div className="footer-bottom">
   <p>Copyright 2022 uifry.com all rights reserved</p>
    </div>
</div>
    </div>
  )
}

export default Footer