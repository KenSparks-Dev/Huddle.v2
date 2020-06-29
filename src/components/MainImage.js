import React from 'react';
import Illustration from '../images/illustration-mockups.svg';
import '../css/mainImage.css';

function MainImage ({headerIcon, header}) {
    return (
      <div className="illustration">
        <div className="header">
          <h3 className="fadeIn-header"><span><i className={headerIcon}></i> {header}</span>
          </h3>
        </div>
        <img className="fadeIn-image" src={Illustration} alt="Main-img"/>
      </div>
    )
  }

export default MainImage
