import React from 'react'
import './sixthcont.css'
import faq from '../../components/images/faq.svg'
import blackst from '../../components/images/blackstarmob.png'
import {Heading,Card} from '../../components'
function SixthCont() {
    const headings="Frequently Asked Question"
  return (
    <div className='card-container'>
        <div className="heading-sec">
            <div className="faq-img"><img src={faq} alt=""style={{marginBottom:"0.5pc"}} /></div>
            <Heading heading={headings}/>
            <img src={blackst} alt="" className='blacksyt'/>
        </div>
        <div className="card-section">
            <div className="card-left">
             <div className="sup">
                <Card/>
             </div>
                <Card/>
             <div className="sup">
                <Card/>
             </div>
            </div>
            <div className="card-right">
            <Card/>
             <div className="sup sup2">
                <Card/>
             </div>
                <Card/>
            </div>
        </div>

    </div>
  )
}

export default SixthCont