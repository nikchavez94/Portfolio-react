import React from 'react';
import './about.css'; 
import ProfilePic from '../../assets/ProfilePic.jpg';
import HeroImage from '../../assets/HeroImage.jpg'; // Ensure this path is correct

const About = () => {
  return (
    <div>
      <div className="hero-image-section">
        <div className="hero-image-container">
          <img
            src={HeroImage}
            alt="DoSomethingImage"
            className="do-something-image"
          />
        </div>
      </div>
      <div className="about-me-section">
        <div className="about-me-content">
          <h1>About Me</h1>
          <p>
            Welcome to my portfolio! Here you can learn more about me and my work.
          </p>
        </div>
        <div className="about-me-image-container">
          <img
            src={ProfilePic}
            alt="Nikki Vargas Pic"
            className="about-me-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;