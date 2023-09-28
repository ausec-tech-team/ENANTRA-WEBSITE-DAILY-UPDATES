// Popup.js
import React from 'react';
import './Popup.css';
import iot from './iot.webp';

const Popup = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        
       <button className="close" onClick={onClose}>X    </button>
        <img src={iot} className="events-img" />
        
        <h2 className='about-event'>ABOUT EVENT</h2>
        <p className='event-desc'>About Event
ABOUT TOPENGINEERS : TOP ENGINEERS is an organization which is run by MIT-ANNA UNIVERSITY ALUMNI, Chennai. TOP ENGINEERS specializes in providing hands on experience on industrial practices to its participants through various workshops, seminars and other means by renowned subject matter experts and researchers to bring out the real world experience.TOP ENGINEERS workshops are designed to provide an insight view in the field of engineering.All the concepts will be explained in detail with the help of practical and with specially designed animations which would help the students to visualize things before actually practically working on it. TOP ENGINEERS have conducted more than 1000 programs in India and trained over 1, 00,000+ students in the last 10 years.</p>
        <h3 className='header-desc'>Event Type:</h3>
        <p className='event-desc'>Venue/Offline Mode</p>
        <h3 className='header-desc'>Start Date :</h3>
        <p className='event-desc'>1st April 2023</p>
        <h3 className='header-desc'>End Date :</h3>
        <p className='event-desc'>1st April 2023</p>
        <h3 className='header-desc'>Location :</h3>
        <p className='event-desc'>Chennai, Tamil Nadu</p>
        <h3 className='header-desc'>Organizer :</h3>
        <p className='event-desc'>Top Engineers</p>
        <h3 className='header-desc'>Category :</h3>
        <p className='event-desc'>Workshop</p>

        
      </div>
    </div>
  );
};

export default Popup;