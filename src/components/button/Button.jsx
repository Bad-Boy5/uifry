import React from 'react'
import './button.css'

function Button(props) {

  return (
    <div className='main-btn'>
<button className="btn"><div className="btn-img"><img src={props.imgs} alt="" /></div><div className="btn-txt">{props.title}</div></button>
    </div>
  )
}

export default Button