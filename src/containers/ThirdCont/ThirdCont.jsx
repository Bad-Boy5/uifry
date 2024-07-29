import React from 'react'
import {Heading,LongLogoPara, Paragraph} from '../../components'
import Advan from '../../components/images/advatnages.png'
import './thirdcont.css'
import noti from '../../components/images/notification.png'
import circ from '../../components/images/Circles.svg'
import Label from '../../components/images/On Hold.svg'
import grand from '../../components/images/graditent-upper-seven-sec.png'
import blackst from '../../components/images/blackstarmob.png'
import iphonee from '../../components/images/iPhone-13-Pro-Frontfront2.png'
import iphonee2 from '../../components/images/iPhone-13-Pro-Frontfront3.png'
function ThirdCont() {
  
  const headings="Clever Notification"
  const paragraphs="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
  return (
<>
    <div className='second-main sec-main-2'>
      <img src={blackst} alt="" className='blackst1234'/>
    <div className="right-txt">
    <div className="right-txt-data right123">
    <div className="feature-img-sec">
        <img src={Advan} alt="featureimage" />
      </div>
        <Heading heading="Why Choose Urify?"/>
<LongLogoPara parapic={noti} headings={headings}/>
<Paragraph paras={paragraphs}/>
    </div>
      </div>
    <div className="left-img  for-the-third">
      
  <img src={circ} alt="" className='circless' />
  <img src={iphonee} alt=""className='absolute iphonee' />
  <img src={iphonee2} alt=""className='absolute iphonee2 ' />
  <img src={Label} alt=""className='absolute iphoneell' />

      <img src={grand} alt="" className='grand'/>
      </div>
</div>
</>
  )
}

export default ThirdCont