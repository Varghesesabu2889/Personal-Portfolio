// Importing necessary dependencies and styles
import React from 'react';
import { portfolio } from '../../data';
import Portfolioitem from '../../Components/Portfolioitem';
import './Portfolio.css';

// Portfolio component definition
const Portfolio = () => {
  return (
    // Portfolio section
    <section className="portfolio section">
      {/* Section title */}
      <h2 className="section__title">My<span> Portfolio</span></h2>

      {/* Container for portfolio items */}
      <div className="portfolio__container container grid">
        {/* Mapping through each portfolio item */}
        {portfolio.map((item) => (
          // Rendering a Portfolioitem component for each item
          <Portfolioitem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

// Exporting the Portfolio component
export default Portfolio;
