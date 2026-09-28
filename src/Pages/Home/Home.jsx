import React from 'react';
import './Home.css';
import Profile from "../../assets/home.png";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { FaHireAHelper } from "react-icons/fa6";

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt="Profile" className='home__img' width="746px" height="1020px" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            I 'm Varghese Sabu. <span className="animated-text"></span>
          </h1>
          <p className="home__description">
            I 'm an Indian front-end developer focused on crafting clean & user-friendly experiences. 
            I am passionate about building excellent software that improves the lives of those around me.
          </p>

          <Link to='/about' className='button'>
            More About Me
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link> &nbsp;&nbsp;&nbsp;
          <Link className='button'>
            Hire Me
            <span className='button__icon'>
              <FaHireAHelper />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
}

export default Home;
