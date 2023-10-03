// Popup.js
import React from 'react';
import './Popup.css';
import iot from './iot.webp';
import elon from './elon-musk.jpeg';
import mark from './mark-zuckerberg.jpg';
import bill from './bill-gates.jpg';
import mute from './mute-btn.png';
import info from './info-icon.png';
import contact from './contact.jpg';


const Popup = ({ onClose }) => {

 /* function redirect() {
    window.location.href = "#contact-section"
  }*/
  return (
    <div className="popup-container">
      <div className="popup">
      
        
      
        <img src={iot} className="events-img" />
        
        <div className='overlay'></div>
  
        <button className='register-button'><a href = "https://unstop.com/conferences/6dt-6-degree-talks-enantra-entrepreneurship-mantra-anna-university-au-chennai-488810" className='reg-link'>Register</a></button>

        <button className='contact-btn'><a href='#contact-section' className='contact-link'>Contact us</a></button>


        
        <button className='close-btn' onClick={onClose}>X </button>
        
        <div className='inline'>
              <img src = {elon} className='guest-img'></img>   
              <img src = {mark} className='guest-img'></img>
              <img src = {bill} className='guest-img'></img>
          
              <h3 className='header-desc0'>Event Type:    Venue/Offline Mode</h3>
                  

              <h3 className='header-desc1'>Start Date :  1st April 2023</h3>
              
              <h3 className='header-desc2'>End Date : 1st April 2023</h3>
              
              <h3 className='header-desc3'>Location : Chennai, Tamil Nadu</h3>
              
              <h3 className='header-desc4'>Organizer : Top Engineers</h3>
              
              <h3 className='header-desc5'>Category : Workshop</h3>
              



        </div>
        <br></br>
        <h2 className='about-event'>ABOUT EVENT</h2>
        <p className='event-desc'>About Event
ABOUT TOPENGINEERS : TOP ENGINEERS is an organization which is run by MIT-ANNA UNIVERSITY ALUMNI, Chennai. TOP ENGINEERS specializes in providing hands on experience on industrial practices to its participants through various workshops, seminars and other means by renowned subject matter experts and researchers to bring out the real world experience.TOP ENGINEERS workshops are designed to provide an insight view in the field of engineering.All the concepts will be explained in detail with the help of practical and with specially designed animations which would help the students to visualize things before actually practically working on it. TOP ENGINEERS have conducted more than 1000 programs in India and trained over 1, 00,000+ students in the last 10 years.</p>
        <br></br>
        <section id='contact-section'>
            <h2 className='about-event'>CONTACT US</h2>
      
            <p className='contact-us' >Shrieya - Vice President</p>
            <img src={contact} className='contact-img'></img>
            <br></br>
            <p className='contact'>+91 2487178723</p>
            <br></br>
            <p className='contact-us'>Harish Hayangrrivar - Vice President</p>
            <img src={contact} className='contact-img'></img>
            <p className='contact'>+91 9287311923</p>
          </section>        
            <br></br>
            <br></br>
      </div>
    </div>
  );
};

export default Popup;