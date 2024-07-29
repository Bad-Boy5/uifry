import React from 'react'
import './navbar.css'
import mainlg from '../../components/images/main-logo-icon.svg'
function Navbar() {


  return (
    <div className='nav_bar h-nav'>
 <div className="left-sec">
 <div className="main-img" ><img src={mainlg} alt="Logo"  /></div>
 <div className='ul-list'>
        <li style={{color:'#FF5555'}}>Home</li>
        <li>About Us</li>
        <li>Pricing</li>
        <li>Features</li>
    </div>
 </div>
 <div className="right-sec">
 <button className="btn1122">Download</button>
 </div>
  
    </div>
  )
}

export default Navbar