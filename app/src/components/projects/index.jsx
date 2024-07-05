import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './projects.css'
import codequizImage from '../../assets/codequiz.png';
import passwordProjectImage from '../../assets/passwordProject.png';
import schedulerImage from '../../assets/scheduler.png';
import firstlookImage from '../../assets/firstlookMovies.png';

const projects = [
   {
    title: "FirstlookMovies",
    imageUrl: firstlookImage,
    url: "https://gabriel-viernes.github.io/first-look-movies/"
  },
  {
    title: "Code Quiz",
    imageUrl: codequizImage,
    url: "https://nikchavez94.github.io/codingquiz/"
  },
  {
    title: "Password Project",
    imageUrl: passwordProjectImage,
    url: "https://nikchavez94.github.io/password-generator-project1/"
  },
  {
    title: "Scheduler",
    imageUrl: schedulerImage,
    url: "https://nikchavez94.github.io/work-day-scheduler/"
  },
 

];

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1, // Show one item at a time
  },
};
/* const responsive = { // New responsive configuration for the carousel
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
*/

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <Carousel responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite={true}// Enables infinite loop
        >
        {projects.map((project, index) => (
          <a key={index}  href={project.url} target="_blank" rel="noopener noreferrer">
            <div className="project-card">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </Carousel>
    </div>
  );
};


export default Projects;