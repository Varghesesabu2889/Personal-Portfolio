import React from 'react';
import './Home.css'; // Importing styles for the Home component
import Profile from "../../assets/home.png"; // Importing the profile image
import { Link } from 'react-router-dom'; // Importing Link component from react-router-dom
import { FaArrowRight } from "react-icons/fa"; // Importing ArrowRight icon from react-icons/fa

const Home = () => {
  return (
    <section className='home section grid'>
      {/* Displaying the profile image */}
      <img src={Profile} alt="" className='home__img' width={"746px"} height={"1020px"} />

      <div className="home__content">
        <div className="home__data">
          {/* Title and description content */}
          <h1 className="home__title"><span> I 'm Varghese Sabu.</span> Web Developer</h1>
          <p className="home__description">
            I 'm an Indian front-end developer focused on crafting clean & user-friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
          </p>

          {/* Link to navigate to the 'about' page */}
          <Link to='/about' className='button'>
            More About Me
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      {/* Colored block in the background */}
      <div className="color__block"></div>
    </section>
  );
}

export default Home;
