import React from 'react'
// import './headingupper.css'
import { Heading } from '../../components'
import AAA from "../../components/images/testimonial.svg"
function HeadingUpper() {
    const headings="What Our Users Say About Us?"
  return (
    <div className='headingcontainer' style={{ width:"40%"}}>
     <div className="logoSec"><img src={AAA} alt="" /></div>
    <div className="main-heading"><Heading heading={headings} /></div>
    </div>
  )
}

export default HeadingUpper