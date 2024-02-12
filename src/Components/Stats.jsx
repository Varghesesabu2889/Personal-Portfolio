// Import React, stats data, and html-react-parser library
import React from 'react';
import { stats } from '../data';
import parse from 'html-react-parser';

// Define a functional component named Stats
const Stats = () => {
  // Return JSX for the Stats component
  return (
    <>
      {/* Use map function to iterate over each object in the stats array */}
      {stats.map(({ no, title }, index) => {
        // Return a div for each stat, displaying the number and parsed title
        return (
          <div className="stats__box" key={index}>
            {/* Display the number for the stat */}
            <h3 className="stats__no">{no}</h3>
            {/* Parse and display the title for the stat using html-react-parser */}
            <p className="stats__title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
}

// Export the Stats component as the default export of this module
export default Stats;
