import React from 'react'
import './images.css'
import mob from '../../components/images/Circles.svg'
function Images(props) {
  return (
    <div className='img-cont'>
        <img src={mob} alt="main-image" className='main-image'/>
        <img src={props.moby} alt='' className='main-image-mob' />
        <img src={props.moby2} alt='' className='main-image-mob2' />
        <img src={props.moby2} alt='' className='main-image-mob3' />
    </div>
  )
}

export default Images