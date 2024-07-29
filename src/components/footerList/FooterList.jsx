import React from 'react'
import './footerlist.css'

function FooterList(props) {
  return (
    <div className='list-cont'>
<div className="upper-headingss">{props.headingl}</div>
<div className="lower-list">
    <ul className='ul-footer'>
        <li>{props.lii1}</li>
        <li>{props.lii2}</li>
        <li>{props.lii3}</li>
        <li>{props.lii4}</li>
        </ul>
</div>
    </div>
  )
}

export default FooterList