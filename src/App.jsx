// Import necessary modules and components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar";
import Themes from './Components/Themes';
import About from "./Pages/about/About";
import Portfolio from "./Pages/portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";

// App component
function App() {
  // Render the components based on the defined routes
  return (
    <BrowserRouter>
      {/* Navbar and Themes components are included in the main layout */}
      <Navbar />
      <Themes />
      {/* React Router Routes to define different pages */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        {/* About page route */}
        <Route path="/about" element={<About />} />
        {/* Portfolio page route */}
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Contact page route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

// Export the App component
export default App;
