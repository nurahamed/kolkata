import React from 'react'
import './Contact.css';
export default function Contact() {
  return (
    <>
       <section className="contact" id="contact">
        <h1 className="text-center">Contact Us</h1>
        <div className="form">
            <input  type="text" name="name" placeholder="Enter your name" id="name"/>
            <input type="text" name="phone"  placeholder="Enter your phone number" id="phone"/>
            <input  type="email" name="email" placeholder="Enter your email" id="email"/>
            <textarea className="back " name="text" id="text" cols="20" rows="8" placeholder="Elabroate your consern"></textarea>
            <button className="btn btn-dark">Submit</button>
         </div>
         
    </section>
    </>
  )
}
