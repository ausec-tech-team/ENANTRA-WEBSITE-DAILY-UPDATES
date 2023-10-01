// src/DynamicDropdown.js
import React, { useState } from 'react';
import './DynamicDropdown.css'
import Popup from './Popup';
import logo from './enantra.png'
import iot from './iot.webp'

const DynamicDropdown = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  }

  const closePopup = () => {
    setIsPopupOpen(false);
  }


  return(

    <html>
      <div className='blur'>
          <div id = "l">
            <img src={logo} className="App-logo" alt="logo" />
            
          </div>



          <div className = "events">
            <h1 className="header-events">EVENTS</h1>     
    
            <img id='c1'  onClick={openPopup}  src={iot} className='events-iot' />

            {isPopupOpen && <Popup onClose={closePopup} />}
            
            
          </div>    
        
        
      </div>
    </html>

  );

};

export default DynamicDropdown;
