import React from 'react'
import {LongLogoPara, Paragraph} from '../../components'
import './forthcont.css'
import noti from '../../components/images/Group 35899.png'
import Label from '../../components/images/visacard.svg'
import grands from '../../components/images/gradient.svg'
import blackst from '../../components/images/blackstarmob.png'
import circ from '../../components/images/Circles.svg'
import iphonee from '../../components/images/iPhone-13-Pro-Frontfront3.png'
function ForthCont() {
  
  const headings="Fully Customizdable"
  const paragraphs="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
  return (

    <div className='second-main min-h-[719px] py-16'>
    <div className="left-img left-img2">
    <img src={circ} alt="" className='circless' />
  <img src={iphonee} alt=""className='absolute iphonee2222' />
  <img src={Label} alt=""className='absolute iphoneelll' />
      <img src={grands} alt="" className='grands'/>
      <img src={blackst} alt="" className='blackst right-0'/>
      </div>
    <div className="right-txt">
    <div className="right-txt-data right123">
   
<LongLogoPara parapic={noti} headings={headings}/>
<Paragraph paras={paragraphs}/>
    </div>
      <img src={blackst} alt="" className='blackst2'/>
      </div>
</div>
  )
}

export default ForthCont