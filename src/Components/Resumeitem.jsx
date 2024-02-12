// Import React and the 'html-react-parser' library
import React from 'react';
import parse from 'html-react-parser';

// Define a functional component named Resumeitem, which takes props (icon, year, title, desc)
const Resumeitem = ({ icon, year, title, desc }) => {
  // Return JSX for the Resumeitem component
  return (
    <div className="resume__item">
      {/* Display the icon for the resume item */}
      <div className="resume__icon">{icon}</div>

      {/* Display the year of the resume item */}
      <span className="resume__date">{year}</span>

      {/* Display the title of the resume item and parse it as HTML using html-react-parser */}
      <h3 className="resume__subtitle">{parse(title)}</h3>

      {/* Display the description of the resume item */}
      <p className="resume__description">{desc}</p>
    </div>
  );
}

// Export the Resumeitem component as the default export of this module
export default Resumeitem;
