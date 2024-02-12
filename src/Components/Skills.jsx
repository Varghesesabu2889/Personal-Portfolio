// Import React, skills data, CircularProgressbar, and the associated styles
import React from 'react';
import { skills } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Define a functional component named Skills
const Skills = () => {
  // Return JSX for the Skills component
  return (
    <>
      {/* Use map function to iterate over each object in the skills array */}
      {skills.map(({ title, percentage }, index) => {
        // Return a div for each skill, with a circular progress bar and title
        return (
          <div className="progress__box" key={index}>
            {/* Create a div for the circular progress bar */}
            <div className="progress__circle">
              {/* Use CircularProgressbar component to display the circular progress bar */}
              <CircularProgressbar
                strokeWidth={7.5}
                text={`${percentage}%`}
                value={percentage}
              />
            </div>
            {/* Display the title of the skill */}
            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
}

// Export the Skills component as the default export of this module
export default Skills;
