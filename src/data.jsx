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
    description: '24 Years',
  },
  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },
  {
    id: 5,
    title: 'Address : ',
    description: 'Electronic City Bangalore, Karnataka, India.',
  },
  {
    id: 6,
    title: 'Phone : ',
    description: '+91 89218 90586',
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
    data: 'https://www.linkedin.com/in/varghese-sabu123/',
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
    no: '1+',
    title: 'Years of <br /> Experience in As Sap Abap Associate Consultant at SLITE Consulting LLP, Thiruvanathapuram',
  },
  {
    id: 2,
    no: '21+',
    title: 'Completed <br /> Full Stack Projects using SAP ABAP with Deployed in  SAP Fiori Launchpad also MERN Stack Web Development Projects',
  },
  {
    id: 3,
    no: '+3',
    title: 'Diploma in <br /> Computer Engineering (Polytechnic, After Higher Secondary Education) ',
  },
  {
    id: 4,
    no: '2+',
    title: ' Internships for SAP ABAP & Web Development in MERN Stack after Education <br /> ',
  },
];

// Resume or work and education history
export const resume = [
{
    id: 1,
    category: 'Internship',
    icon: <FaBriefcase />,
    year: '2026 January -  2026 May',
    title: 'Associate SAP ABAP Consultant  <span> SLITE CONSULTING LLP Thiruvanathapuram (On-Site) </span>',
    desc: 'Engineered and delivered SAP ABAP solutions in SAP S/4HANA environments for client-facing business applications. Developed RESTful OData services using SAP RAP to support enterprise API integrations and designed and optimized CDS Views for analytical and transactional data models. Collaborated with cross-functional teams to gather requirements and translated complex business logic into scalable and maintainable ABAP solutions.',
  },
  {
    id: 2,
    category: 'Internship',
    icon: <FaBriefcase />,
    year: '2025 August - 2026 January',
    title: 'SAP ABAP Intern  <span> SLITE CONSULTING LLP Thiruvanathapuram (On-Site)</span>',
    desc: 'Developed classical and interactive ABAP reports, Smart Forms, and Data Dictionary objects within SAP S/4HANA systems. Applied modularization techniques using function modules, classes, and methods to support code reusability and maintainability. Performed ABAP debugging and performance tuning to identify runtime inefficiencies in custom report execution.',
  },
  {
    id: 3,
    category: 'Internship',
    icon: <FaBriefcase />,
    year: '2024 September - 2024 April',
    title: 'MERN STACK FULL STACK <span> ZIDIO DEVELOPMENT Bangalore (Remote)  </span> ',
    desc: 'Gained hands-on experience in full-stack web development using MongoDB, Express.js, React.js, and Node.js. Built dynamic and responsive web applications by developing React-based front-end interfaces, Node.js and Express.js back-end services, REST APIs, and MongoDB database operations. Applied practical skills in API integration, database management, component-based development, and end-to-end application development, strengthening my ability to work across both front-end and back-end technologies.',
  },
  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2024 November - 2025 January',
    title: 'SAP ABAP Training <span> VACS SAP EDU Institute, Thane, Maharashtra  </span>',
    desc: 'Completed SAP ABAP training with a focus on SAP S/4HANA environment,  Data Dictionary,  SAP RAP,  CDS Views and ABAP Debugging. Gained hands-on exposure to SAP backend development and practical implementation of ABAP concepts in S/4HANA environments. Along with the  training,  earned the SAP Certified Associate - BackEnd Developer  –  ABAP Cloud, demonstrating knowledge of modern SAP ABAP Cloud development.',
  },
  
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
     year: '2023 September - 2024 April 2024',
    title: 'MEAN / MERN FullStack Web Development <span> Luminar Technolab Kochi, Kerala </span>',
    desc: 'Completed ME(A)RN Full Stack Development training with hands-on exposure to MongoDB, Express.js, React.js, and Node.js. Developed practical knowledge of full-stack web development, including frontend and backend development, API integration, and database management. Applied these technologies to understand the complete development cycle of dynamic and responsive web applications.',
  },
  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020 November - 2023 July',
    title: 'Diploma in Computer Engineering <span>Carmel Polytechnic College, Alappuzha , Kerala </span>',
    desc: 'Completed a Diploma in Computer Engineering, building a strong technical foundation in computer engineering, programming, software development, and problem-solving. Gained foundational knowledge of computer systems, software concepts, databases, and web technologies.This academic foundation supported my progression into SAP ABAP and full-stack web development.',
  }
  ];

// Skills data with percentages
export const skills = [
  {
    id: 1,
    title: 'Modern ABAP',
    percentage: '75',
  },
  {
    id: 2,
    title: 'CDS Views',
    percentage: '70',
  },{
    id: 3,
    title: ' SAP RAP',
    percentage: '86',
  },{
    id: 4,
    title: 'AMDP',
    percentage: '45',
  },
  {
    id: 5,
    title: 'Core ABAP',
    percentage: '65',
  },
  {
    id: 6,
    title: 'Data Dictionary',
    percentage: '85',
  },
  {
    id: 7,
    title: 'Report Programming',
    percentage: '75',
  },
  {
    id: 8,
    title: 'MERN',
    percentage: '83',
  },
];

// Portfolio projects data
export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'E Commerce Sales Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Using RAP Framework of SAP with Deployed on that Server Fiori Launchpad',
      },
      {
        icon: < FiExternalLink/>,
        title: 'Github : ',
        data: 'No Repository For it',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'ABAP, EML, Fiori',
      },
      {
        icon: <FiExternalLink />,
        title: 'Deploy : ',
        data: 'Deployed on That Server SAP Launchpad Cannot be access',
      },
    ],
  },
  {
    id: 2,
    img: Work2,
    title: 'Project Fair',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Full Stack Website-Design',
      },
      {
        icon: < FiExternalLink/>,
        title: 'Github : ',
        data: 'https://github.com/Varghesesabu2889/projectfair-mern.git',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MERN Stack',
      },
      {
        icon: <FiExternalLink />,
        title: 'Deploy : ',
        data: 'https://projectfairr.netlify.app/',
      },
    ],
  },
  {
    id: 3,
    img: Work3,
    title: 'Resume Builder',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website-Design with Firebase',
      },
      {
        icon: < FiExternalLink/>,
        title: 'Github : ',
        data: 'https://github.com/Varghesesabu2889/resume-builder.git',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js & Firebase',
      },
      {
        icon: <FiExternalLink />,
        title: 'Deploy : ',
        data: 'https://resumebooster-87ecf.web.app/',
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
        desc: 'Website-Design With Json Server',
      },
      {
        icon: < FiExternalLink/>,
        title: 'Github : ',
        data: 'https://github.com/Varghesesabu2889/media-app-frontend.git',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js & JSON Server',
      },
      {
        icon: <FiExternalLink />,
        title: 'Deploy : ',
        data: 'https://media-player-reactt.netlify.app/',
      },
    ],
  },
  {
    id: 5,
    img: Work5,
    title: 'Food-Recipe',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website-Design With API',
      },
      {
        icon: < FiExternalLink/>,
        title: 'Github : ',
        data: 'https://github.com/Varghesesabu2889/food-recipe.git',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js & API',
      },
      {
        icon: <FiExternalLink />,
        title: 'Deploy : ',
        data: 'https://recipieapp-react.netlify.app/',
      },
    ],
  },
  {
    id: 6,
    img: Work6,
    title: 'NAK Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website-Design using React.js',
      },
      {
        icon: < FiExternalLink/>,
        title: 'Github : ',
        data: 'https://github.com/Varghesesabu2889/kbc-mern.git',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Deploy : ',
        data: 'https://kbc-mern.vercel.app/',
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
