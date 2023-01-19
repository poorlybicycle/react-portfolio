import React from 'react'
import Header from '../../Header/Header';
import './style.css';


export default function Contact() {
  return (
    <>

      <div class="contact-container">
        <form>

          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

              <label for="subject">Email</label>
              <textarea id="subject" name="subject" placeholder="Your email.."></textarea>

              <input type="submit" value="Submit"/>

              </form>
            </div>
          </>
          )
}