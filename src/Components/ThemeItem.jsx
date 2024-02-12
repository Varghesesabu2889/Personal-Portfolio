// Import React library
import React from 'react';

// Define a functional component named ThemeItem, which takes props (color, img, changeColor)
const ThemeItem = ({ color, img, changeColor }) => {
  return (
    // Render an image element representing a theme with an onClick event to trigger the changeColor function
    <img
      src={img}
      alt=""
      className='theme__img'
      onClick={() => { changeColor(color) }}
    />
  );
}

// Export the ThemeItem component as the default export of this module
export default ThemeItem;
