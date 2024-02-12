// Import React and useState from the 'react' library
import React, { useState } from 'react';

// Import Close icon from the '../assets' directory
import Close from "../assets/close.svg";

// Define a functional component named Portfolioitem, which takes props (img, title, details)
const Portfolioitem = ({ img, title, details }) => {
  // Use state to manage the visibility of the modal
  const [modal, setModal] = useState(false);

  // Define a function to toggle the modal state
  const toggleModal = () => {
    setModal(!modal);
  };

  // Return JSX for the Portfolioitem component
  return (
    <div className="portfolio__item">
      {/* Display the portfolio item image */}
      <img src={img} alt="" className="portfolio__img" />

      {/* Create a div for the hover effect, and onClick trigger toggleModal function */}
      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {/* Conditionally render the modal based on the state of modal */}
      {modal && (
        <div className="portfolio__modal">
          {/* Create a div for the modal content */}
          <div className="portfolio__modal-content">
            {/* Display the Close icon, and onClick trigger toggleModal function */}
            <img src={Close} alt="" className='modal__close' onClick={toggleModal} />

            {/* Display the title of the portfolio item in the modal */}
            <h3 className="modal__title">{title}</h3>

            {/* Create an unordered list for the details of the portfolio item in the modal */}
            <ul className="modal__list grid">
              {/* Use map function to iterate over each object in the details array */}
              {details.map(({ icon, title, desc }, index) => {
                // Return a list item for each object in the details array
                return (
                  <li className="modal__item" key={index}>
                    {/* Display the icon for the detail */}
                    <span className="item__icon">{icon}</span>

                    {/* Display the title and description for the detail */}
                    <div>
                      <span className="item__title">{title}</span>
                      <span className="item__details">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Display the image of the portfolio item in the modal */}
            <img src={img} alt="" className='modal__img' />
          </div>
        </div>
      )}
    </div>
  );
}

// Export the Portfolioitem component as the default export of this module
export default Portfolioitem;
