import React from 'react'
import './projects.css'
import codequizImage from '../../assets/codequiz.png';
import passwordProjectImage from '../../assets/passwordProject.png';
import schedulerImage from '../../assets/scheduler.png';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="cards-container">
      <Card />
      <Card2 />
      <Card3 />
      </div>
    </div>
  );
};

export const Card = () => {
  return (
    <div className="card">
      <img src={codequizImage} 
      alt="Card Image" 
      className="card-image"
      style={{ width: '500px', height: '500px' }} />
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="card">
      <img src={passwordProjectImage} 
      alt="Card Image" 
      className="card-image"
      style={{ width: '500px', height: '500px' }} />
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="card">
      <img src={schedulerImage} 
      alt="Card Image" 
      className="card-image"
      style={{ width: '500px', height: '500px' }} />
    </div>
  );
};
export default Projects;