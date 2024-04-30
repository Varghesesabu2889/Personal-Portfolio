// Import the React library to create React components
import React from 'react';

// Importing personalInfo data from '../data'
import { personalInfo } from '../data';

// Define a functional component named Info
const Info = () => {
  // Return JSX using React.Fragment (shortened as <> and </>) to wrap multiple elements without adding an extra div to the DOM
  return (
    <>
      {/* Use map function to iterate over each object in the personalInfo array */}
      {personalInfo.map((item,index) => {
        // Return a list item for each object in the personalInfo array
        return (
          <li className="info__item" key={index}>
            {/* Display the title of the personal information */}
            <span className="info__title">{item.title}</span>
            {/* Display the description of the personal information */}
            <span className="info__description">{item.description}</span>
            <a href={item.data}  target="_blank" rel="noopener noreferrer" style={{"textDecoration":'none'}}>{item.data}</a>

          </li>
        );
      })}
    </>
  );
}

// Export the Info component as the default export of this module
export default Info;
