// Import React library and necessary components
import React from 'react';
import Info from '../../Components/Info';
import Stats from '../../Components/Stats';
import './About.css'; // Import styles specific to the About component
import { FaDownload } from 'react-icons/fa';
import CV from "../../assets/Varghese-Cv.pdf"; // Import the CV (resume) file
import Skills from '../../Components/Skills';
import { resume } from '../../data'; // Import resume data
import Resumeitem from '../../Components/Resumeitem';

// Define the functional component named About
const About = () => {
  return (
    <main className="section container">
      {/* About section */}
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="about__container grid">
          {/* Personal Information */}
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              {/* Render the Info component for personal information */}
              <Info />
            </ul>
            {/* Download CV button */}
            <a href={CV} download='' className='button'>
              Download CV
              <span className='button__icon'><FaDownload/></span>
            </a>
          </div>
          {/* Statistics section */}
          <div className="stats grid">
            {/* Render the Stats component for statistics */}
            <Stats />
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="separator"></div>

      {/* Skills section */}
      <section className="skills">
        <h3 className="section__subtitle subtitle__center">
          My Skills
        </h3>
        <div className="skills__container grid">
          {/* Render the Skills component for displaying skills */}
          <Skills />
        </div>
      </section>

      {/* Separator */}
      <div className="separator"></div>

      {/* Resume section */}
      <div className="resume">
        <h3 className="section__subtitle subtitle__center">
          Internships & Education
        </h3>
        <div className="resume__container grid">
          {/* Render Resumeitem component for each item in the 'Internship' category */}
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === 'Internship') {
                return <Resumeitem key={val.id} {...val} />;
              }
            })}
          </div>
          {/* Render Resumeitem component for each item in the 'education' category */}
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === 'education') {
                return <Resumeitem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

// Export the About component as the default export of this module
export default About;
