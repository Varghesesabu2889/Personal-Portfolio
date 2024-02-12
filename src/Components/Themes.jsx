// Import React, useEffect, useState, icons, and related styles
import React, { useEffect, useState } from 'react';
import { themes } from '../data';
import ThemeItem from './ThemeItem';
import { FaCog } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import './theme.css';

// Helper function to get color from localStorage or use a default value
const getStorageColor = () => {
    let color = 'hsl(252,35%,51%)';
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color');
    }
    return color;
};

// Helper function to get theme from localStorage or use a default value
const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

// Define a functional component named Themes
const Themes = () => {
    // State variables for showing the switcher, current color, and current theme
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState(getStorageTheme());

    // Function to change the color
    const changeColor = (color) => {
        setColor(color);
    };

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    // Effect to update the color in the document styles and localStorage when it changes
    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color]);

    // Effect to update the theme in the document class and localStorage when it changes
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Return JSX for the Themes component
    return (
        <div>
            <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
                {/* Toggle button for showing/hiding the switcher */}
                <div className="style__switcher-toggler" onClick={() => setShowSwitcher(!showSwitcher)}>
                    <FaCog />
                </div>

                {/* Theme toggler button to switch between light and dark themes */}
                <div className="theme__toggler" onClick={toggleTheme}>
                    {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div>

                {/* Title for the style switcher */}
                <h3 className="style__switcher-title">
                    Style Switcher
                </h3>

                {/* Color options displayed as theme items */}
                <div className="style__switcher-items">
                    {themes.map((theme, index) => (
                        <ThemeItem key={index} {...theme} changeColor={changeColor} />
                    ))}
                </div>

                {/* Close button to hide the switcher */}
                <div className="style__switcher-close" onClick={() => setShowSwitcher(!showSwitcher)}>
                    &times;
                </div>
            </div>
        </div>
    );
}

// Export the Themes component as the default export of this module
export default Themes;
