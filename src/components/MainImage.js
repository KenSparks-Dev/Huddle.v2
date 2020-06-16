import React, { Component } from 'react'
import Illustration from '../images/illustration-mockups.svg'
export class MainImage extends Component {
  render() {
    return (
      <div className="illustration">
        <div className="header">
<<<<<<< HEAD
         <h3 className="fadeIn-header"><span><i className="fa fa-comments"></i></span> Huddle</h3>
=======
          <h3 className="fadeIn-header"><span><i className="fa fa-comments"></i></span> Huddle</h3>
>>>>>>> 3ae40c9e869fae27d816c49e19841bb9e5ded2a9
        </div>
        <img className="fadeIn-image" src={Illustration} alt="Main-img"/>
      </div>
    )
  }
} 
export default MainImage
