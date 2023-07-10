import React from 'react'
import './contact.css'
import {GrMail} from 'react-icons/gr'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wqeq14q', 'template_bkm51e4', form.current, 'yJzTgZOWtF1mUvBUG')

    e.target.reset()
      
  };
  return (
    <section id="contact" >
      <h2 className="title">Get In Touch</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <GrMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>keilabraden@gmail.com</h5>
            <a className='btn btn-primary' href="mailto:keilabraden@gmail.com" target='_blank' >Send an email</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Keila Braden</h5>
            <a class="btn btn-primary" href="https://www.linkedin.com/in/keila-braden/" target="_blank">Connect with me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message' required/>
          <a class="submit-button" type='submit' className='btn btn-primary' >Send Message</a>
        </form>
      </div>
    </section>

  )
}

export default Contact 