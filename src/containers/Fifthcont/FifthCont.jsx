import React from 'react'
import './fifthcont.css'
import {Heading} from '../../components'
import AAA from "../../components/images/testimonial.svg"
import {LongLogoPara, Paragraph} from '../../components'
import mobR from '../../components/images/mainreview.png'
import circulum from '../../components/images/Circles.svg'
import Grand from '../../components/images/gradient.svg'
import Labels from '../../components/images/idlogos.svg'
import Labels2 from '../../components/images/nick jonas.svg'
import blackst from '../../components/images/blackstarmob.png'
function FifthCont() {
    const headings="The Best Financial Accounting App Ever!"
    const headingss="What Our Users Says About Us?"
  const paragraphs="Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam."
  return (
    <>
    <div className='main-section-c'>
    <div className='headingcontainer w-2/4 flex items-center flex-col my-16' >
     <div className="logoSec mb-4"><img src={AAA} alt="" /></div>
    <div className="main-heading flex justify-center"><Heading heading={headingss} /></div>
    </div>
      <img src={blackst} alt="" className='blackstt' />
    </div>
    <div className='second-main second-main-with-react '>
    <div className="left-img img150" >
   <img src={circulum} alt="" className='circulum w-full' />
   <img src={mobR} alt="" className='review absolute w-full' />
      <img src={Grand} alt="" className='grand -z-10 absolute top-50' />
      </div>
    <div className="right-txt">
    <div className="right-txt-data right123 right1234">
<LongLogoPara headings={headings}/>
<Paragraph paras={paragraphs}/>
<div className="labels-images"><img src={Labels} alt="" /></div>
<div className="labels2-images"><img src={Labels2} alt="" /></div>
    </div>
      </div>
</div>
    </>
  )
}

export default FifthCont