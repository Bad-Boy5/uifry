import React from 'react'
import "./paragraph.css"
function Paragraph(props) {
  return (
    <div className='para'style={{ fontSize:'18px',lineHeight:'28px',fontWeight:'500',color:'#000000' ,maxWidth:'100%'}}>
      <p>
    {props.paras}
      </p>
    </div>
  )
}

export default Paragraph