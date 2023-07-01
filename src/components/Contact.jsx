import React from 'react'
import '../styles/contact.css'
import fb from '../assets/facebook.png'
import twt from '../assets/twitter.png'
import inst from '../assets/insta.png'
import yt from '../assets/yt.png'

const Contact = () => {
  return (
    <>
    <div className="contact-body">
    <div class="heading_contact">
        <h1 class="top_contact"> <span>Contact </span><span class="highlight">Us</span> </h1>
    </div>
    <div class="container_contact">
        <div class="header_contact">
        </div>
        <div class="content_contact">
          <div class="contact-form">
            <h2>Contact Us</h2>
            <form action="submit_contact_form.php" method="post">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
              </div>
              <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <div class="form-group">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
          <div class="social-media">
            <h2>Follow us on:</h2>
            <ul>
              <li>
                <a href="https://www.facebook.com/bandname">
                    <img src={fb} alt="Facebook Logo"/>
                </a>


                <a href="https://www.twitter.com/bandname">
                    <img src={twt} alt="Twitter Logo"/>
                </a>


                
                <a href="https://www.instagram.com/bandname">
                    <img src={inst} alt="Instagram Logo"/>
                </a>


                <a href="https://www.youtube.com/bandname">
                    <img src={yt} alt="YouTube Logo"/>
                </a>
                </li>
            </ul>

            <li class="tel"> Contact us now at :<a href="tel:+919414307559"> +91 1233354364</a></li>
            <li class="email">Email at:<a href="mailto:example@gmail.com">  bandname@gmail.com</a></li>
          </div>
        </div>
  </div>
  </div>
    </>
  )
}

export default Contact