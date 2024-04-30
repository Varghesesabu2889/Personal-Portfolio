// Importing icons from React and Feather icons
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

// Importing images for portfolio projects and theme options
import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

// Constants for navigation links
export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },
  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },
  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },
  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

// Personal information data
export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Varghese',
  },
  {
    id: 2,
    title: 'Last Name : ',
    description: 'Sabu',
  },
  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },
  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },
  {
    id: 5,
    title: 'Address : ',
    description: 'Cherthala, Alappuzha, Kerala, India.',
  },
  {
    id: 6,
    title: 'Phone : ',
    description: '+918281072889',
  },
  {
    id: 7,
    title: "Email",
    description: "varghesesabu345@gmail.com"
  },
  {
    id: 8,
    title: 'GitHub : ',
    data: 'https://github.com/Varghesesabu2889',
  },
  {
    id: 9,
    title: 'linkedin : ',
    data: 'www.linkedin.com/in/varghese-sabu-2b747b283',
  },
  {
    id: 10,
    title: 'Languages : ',
    description: 'Malayalam, English',
  },
];

// Stats or achievements data
export const stats = [
  {
    id: 1,
    no: '3+',
    title: 'Years of <br /> Diploma in Computer Engineering',
  },
  {
    id: 2,
    no: '12+',
    title: 'Completed <br /> Projects',
  },
  {
    id: 3,
    no: '2+',
    title: 'Higher <br /> Secondary',
  },
  {
    id: 4,
    no: '13+',
    title: ' Awards <br /> Won',
  },
];

// Resume or work and education history
export const resume = [
  {
    id: 1,
    category: 'Internship',
    icon: <FaBriefcase />,
    year: '2023 SEPTEMBER - 2024 APRIL',
    title: 'MEA(R)N STACK<span>WEB DEVELOPMENT  </span>',
    desc: 'A ME(A)RN (MongoDB, Express.js, React.js, Angular, and Node.js) stack development course provides comprehensive training in building modern web applications. Currently interning at Luminar Technolab Kochi',
  },
  {
    id: 2,
    category: 'Internship',
    icon: <FaBriefcase />,
    year: 'August 2022',
    title: 'Application Development using Flutter <span> Mobile Application Development </span>',
    desc: 'Flutter is a versatile UI toolkit developed by Google for creating natively compiled applications across various platforms, such as iOS, Android, and the web, using a single codebase. Interning at VerDant Power Solutions.',
  },
  {
    id: 3,
    category: 'Internship',
    icon: <FaBriefcase />,
    year: 'April 2018',
    title: ' E-learning program of Computer Programming <span>C++ Programming</span>',
    desc: 'C++ is a powerful, general-purpose programming language known for its performance and efficiency, widely used in systems programming, game development, and applications requiring low-level memory manipulation. Interning at RUTRONIX.',
  },
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2023',
    title: 'Diploma in <span> Computer Engineering </span>',
    desc: 'A Diploma in Computer Engineering typically spans three years and offers comprehensive education in computer hardware, software, and systems. Studied at Carmel Polytechnic College, Alappuzha.',
  },
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'JULY 2018',
    title: 'Higher Secondary <span> Plus two  </span>',
    desc: 'Higher Secondary Education, often referred to as "Plus Two," generally represents the last two years of pre-university education. It typically includes students in the 11th and 12th grades, providing a more specialized and in-depth curriculum and serves as a preparatory stage for higher education or vocational training. Studied at Holy Family Higher School Cherthala.',
  },
  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: 'MARCH 2018',
    title: 'High School <span> Tenth </span>',
    desc: `High school or tenth grade typically refers to the last year of compulsory education before students move on to higher levels of education or enter the workforce. In many educational systems, high school encompasses grades 9 to 12, with the tenth grade representing the second year of this phase. Studied at St Theresa's High School Manappuram.`,
  },
];

// Skills data with percentages
export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },
  {
    id: 2,
    title: 'CSS',
    percentage: '85',
  },
  {
    id: 3,
    title: 'Javascript',
    percentage: '75',
  },
  {
    id: 4,
    title: 'Figma',
    percentage: '65',
  },
  {
    id: 5,
    title: 'React',
    percentage: '79',
  },
  {
    id: 6,
    title: 'Angular',
    percentage: '69',
  },
  {
    id: 7,
    title: 'MongoDB',
    percentage: '82',
  },
  {
    id: 8,
    title: 'Express',
    percentage: '76',
  },
];

// Portfolio projects data
export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Netflix-front-clone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website-Design',
      },
      {
        icon: < FiExternalLink/>,
        title: 'Github : ',
        data: 'https://github.com/Varghesesabu2889/Netflix-front-clone.git',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Netlify : ',
        data: 'https://react-netflixwebsite.netlify.app/',
      },
    ],
  },
  {
    id: 2,
    img: Work2,
    title: 'Cinema-Factory',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website-Design',
      },
      {
        icon: < FiExternalLink/>,
        title: 'Github : ',
        data: 'https://github.com/Varghesesabu2889/cinema-factory.git',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Netlify : ',
        data: 'https://cinema-company.netlify.app/',
      },
    ],
  },
  {
    id: 3,
    img: Work3,
    title: 'Developer-Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website-Design',
      },
      {
        icon: < FiExternalLink/>,
        title: 'Github : ',
        data: 'https://github.com/Varghesesabu2889/Developer-Game.git',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Netlify : ',
        data: 'https://developergame.netlify.app/',
      },
    ],
  },
  {
    id: 4,
    img: Work4,
    title: 'Media-Player',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website-Design',
      },
      {
        icon: < FiExternalLink/>,
        title: 'Github : ',
        data: 'https://github.com/Varghesesabu2889/media-app-frontend.git',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Netlify : ',
        data: 'https://media-player-reactt.netlify.app/',
      },
    ],
  },
  {
    id: 5,
    img: Work5,
    title: 'Stop-Watch',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website-Design',
      },
      {
        icon: < FiExternalLink/>,
        title: 'Github : ',
        data: 'https://github.com/Varghesesabu2889/Stopwatch.git',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Netlify : ',
        data: 'https://react-stop-watchh.netlify.app/',
      },
    ],
  },
  {
    id: 6,
    img: Work6,
    title: 'Food-Recipe',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website-Design',
      },
      {
        icon: < FiExternalLink/>,
        title: 'Github : ',
        data: 'https://github.com/Varghesesabu2889/food-recipe.git',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Netlify : ',
        data: 'https://recipieapp-react.netlify.app/',
      },
    ],
  },
];

// Theme options data
export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },
  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },
  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },
  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },
  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },
  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },
  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },
  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },
  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },
  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
