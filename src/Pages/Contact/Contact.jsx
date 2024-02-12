// Import React library and necessary icons
import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaWhatsapp
} from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';

// Import the styles for the Contact component
import './Contact.css';

// Define the functional component named Contact
const Contact = () => {
  return (
    <section className="contact section">
      {/* Contact section title */}
      <h2 className="section__title">Get In<span> Touch</span></h2>

      {/* Contact container with grid layout */}
      <div className="contact__container container grid">
        {/* Contact data */}
        <div className="contact__data">
          {/* Contact title and description */}
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to
            discussing new projects, creative ideas, or opportunities
            to be part of your visions.
          </p>

          {/* Contact information */}
          <div className="contact__info">
            {/* Email info item */}
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className="info title">Mail Me</span>
                <h4 className="info__desc">varghesesabu345@gmail.com</h4>
              </div>
            </div>

            {/* Phone info item */}
            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className="info title">Call me</span>
                <h4 className="info__desc">+918281072889</h4>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="contact__socials">
            {/* Facebook */}
            <a href="https://www.facebook.com/varkychan.sabu" target='_blank' className="contact__social-link">
              <FaFacebookF />
            </a>
            {/* GitHub */}
            <a href="https://github.com/Varghesesabu2889" target='_blank' className="contact__social-link">
              <FaGithub />
            </a>
            {/* LinkedIn */}
            <a href="www.linkedin.com/in/varghese-sabu-2b747b283" target='_blank' className="contact__social-link">
              <FaLinkedin />
            </a>
            {/* WhatsApp */}
            <a href="https://web.whatsapp.com/+918281072889" target='_blank' className="contact__social-link">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Contact form */}
        <form action="" className="contact__form">
          {/* Form input group with various input fields */}
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" className="form__control" placeholder='Your Name' />
            </div>
            <div className="form__input-div">
              <input type="email" className="form__control" placeholder='Your Email' />
            </div>
            <div className="form__input-div">
              <input type="text" className="form__control" placeholder='Your Subject' />
            </div>
            <div className="form__input-div">
              <textarea placeholder='Your Message' className="form__control textarea"></textarea>
            </div>
          </div>
          {/* Submit button with icon */}
          <div>
            <button className="button">Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

// Export the Contact component as the default export of this module
export default Contact;
