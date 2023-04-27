import React from 'react'
import "./banner.css"

const Banner = () => {
  return (
    <div className='main_section'>
        <div className='content'>
            <h1>Your <span className='highlight'>Streaming Service</span>, <br/>Finally in one place</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illum dolorem repudiandae praesentium laboriosam est error vel sed ipsam incidunt iure quasi</p>
            <button>Know More</button>
        </div>
          <img alt='banner_img' src={require('../../asset/banner.png')} />
    </div>
  )
}

export default Banner