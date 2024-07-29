import React from 'react'
import './long-logo.css'
function LongLogoPara(props) {
  return (
    <div className='para-container'>
   <div className="logo-sec"><div className="logo-img"><img src={props.parapic} alt='' /></div><div className="logo-txt">{props.headings}</div></div>
    </div>
  )
}

export default LongLogoPara