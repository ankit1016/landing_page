import React from 'react'
import "./inquiry.css"
const Inquiryform = () => {
  return (
    <div className='inquiry_main_section'>
     <div className='visible'> <img src={require("../../asset/Inquiry.png")} alt="inquiry_img" /></div>
      <div className='inquiry_form'>
        <h1 className='form_heading'><span className='highlight'>Inquiry </span>Form</h1>
      <form>
        <div className='form_div'>
          <div>
       <label for="fname">First Name</label>
       <input type="text" id="fname" name="fname" placeholder='Name'/>
       </div>
       <div>
       <label for="Sname">Second Name</label>
      <input type="text" id="Sname" name="Sname" placeholder='Second Name'/>
      </div>
      </div>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder='Your Email ID'/>
      <label for="phone_number">Phone Number</label>
      <input type="text" id="phone_number" name="phone_number" placeholder='+91 62845-52525'/>
      <label for="description">Description</label>
      <input type="text" id="description" name="description" placeholder='Your Message Here...'/>
      <button type='submit' className='submit_button'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Inquiryform