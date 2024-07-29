import React from 'react'
import './listitems.css'

function ListItems() {
  return (
    <div className='ul-list'>
        <li style={{color:'#FF5555'}}>Home</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Features</li>
    </div>
  )
}

export default ListItems