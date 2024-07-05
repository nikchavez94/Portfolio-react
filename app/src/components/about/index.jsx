import React from 'react';
import './about.css'; 
import ProfilePic from '../../assets/ProfilePic.jpg';

const About = () => {
  return (
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
  );
};

export default About;