import React from 'react'
import './maincont.css'

import maicirc from '../../components/images/maincontcircl-sec.png'
import img1 from '../../components/images/Group 3.svg'
import img2 from '../../components/images/Vector 1.svg'
import grad from '../../components/images/gradient.svg'
import blackst from '../../components/images/blackstarmob.png'
import grad2 from '../../components/images/3mobss.png'
import mainTop from '../../components/images/main-top-img.svg'
import mainMd from '../../components/images/main-md.svg'
import {Button } from '../../components/'
function MainCont() {

  return (
    <div className='main_cont'>
<div className="left_main_sec">
 <div className="left-data">
 <div className="heading_sec"> <div className='main-heading'>
 Make The Best Financial Decisions
    </div></div>
   <div className="para_sec">
   <div className='para1'style={{ fontSize:'18px',lineHeight:'28px',fontWeight:'500',color:'#000000' ,maxWidth:'82%'}}>
      <p>
      Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
      </p>
    </div>
   </div>
   <div className="main_buttons_sec"><div className="btn1"><Button title="Get Started" imgs={img2}/></div>
   <div className="btn2"><Button title="Watch Video" imgs={img1}/>
   <div className="img-g"><img src={grad} alt="images gradient" /></div>
   </div>
   </div>
  <img src={blackst} alt="" className='blackst3 absolute   w-12  cursor-pointer hover:w-14 hover:shadow-lg hover:rotate-0'/>
  <img src={blackst} alt="" className='blackst6 absolute   w-12  cursor-pointer hover:w-14 hover:shadow-lg hover:rotate-0'/>
 </div>
   </div>
<div className="right_main_sec">
<div className="main-circ-cont">
 <img src={mainTop} alt="" className='maintop' />
 <img src={mainMd} alt="" className='mainmd' />
<img src={maicirc} alt=""className='circlesss' />
</div>
  
  <img src={grad2} alt="" className='blackst4'/>
</div>


    </div>
  )
}

export default MainCont