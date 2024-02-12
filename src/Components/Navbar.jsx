// Import React and useState from the 'react' library
import React, { useState } from 'react';

// Importing links data from '../data'
import { links } from '../data';

// Import NavLink component from 'react-router-dom'
import { NavLink } from 'react-router-dom';

// Import styles from 'navbar.css'
import './navbar.css';

// Define a functional component named Navbar
const Navbar = () => {
  // Use state to manage the visibility of the menu
  const [showMenu, setShowMenu] = useState(false);

  // Return JSX for the Navbar component
  return (
    <nav className="nav">
      {/* Conditionally apply the 'show-menu' class based on the state of showMenu */}
      <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
        {/* Create an unordered list for the navigation links */}
        <ul className="nav__list">
          {/* Use map function to iterate over each object in the links array */}
          {links.map(({ name, icon, path }, index) => {
            // Return a list item for each object in the links array
            return (
              <li className="nav__item" key={index}>
                {/* Use NavLink to create a navigation link with an active class */}
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? 'nav__link active-nav'
                      : 'nav__link'
                  }
                  // Toggle the showMenu state on link click
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {/* Display the icon for the navigation link */}
                  {icon}
                  {/* Display the name for the navigation link */}
                  <h3 className="nav__name">
                    {name}
                  </h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Conditionally apply the 'animate-toggle' class based on the state of showMenu */}
      <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
        // Toggle the showMenu state on toggle button click
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

// Export the Navbar component as the default export of this module
export default Navbar;
