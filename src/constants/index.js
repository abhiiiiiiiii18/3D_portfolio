import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  postgresql,
  cloud,
  fullstack,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Computing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgres",
    icon: postgresql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Self-Driven Learning",
    icon: reactjs,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Learned the fundamentals of building user interfaces using React.js, including components, props, and state management.",
      "Developed small-scale projects such as to-do apps and portfolio websites to practice React.js concepts.",
      "Explored React Router for implementing navigation and single-page application (SPA) functionality.",
      "Experimented with popular React libraries such as Material-UI and Tailwind CSS for styling.",
    ],
  },
  {
    title: "PostgreSQL Learner",
    company_name: "Self-Driven Learning",
    icon: postgresql,
    iconBg: "#E6DEDD",
    date: "August 2024 - Present",
    points: [
      "Learned the fundamentals of database design and querying using PostgreSQL.",
      "Practiced creating and managing relational databases for small web applications.",
      "Gained experience in writing basic queries, joins, and using constraints for data integrity.",
      "Explored PostgreSQL integration with Node.js for handling application data.",
    ],
  },
  {
    title: "Cloud Computing Enthusiast",
    company_name: "Independent Learning",
    icon: cloud,
    iconBg: "#383E56",
    date: "August 2024- Present",
    points: [
      "Completed coursework on cloud computing fundamentals, focusing on GCP services.",
      "Gained theoretical knowledge about deploying scalable web applications on cloud platforms.",
      "Explored concepts such as virtualization, cloud storage, and compute services.",
      "Studied real-world cloud use cases to understand their practical applications.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Self-Driven Learning",
    icon: fullstack,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present",
    points: [
      "Built and deployed responsive web applications using React.js, Node.js, and PostgreSQL.",
      "Designed and developed a personal portfolio website to showcase skills and projects.",
      "Worked on collaborative open-source projects, contributing to both front-end and back-end development.",
      "Explored cloud computing fundamentals and implemented basic cloud-based solutions using GCP.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abhi has an incredible passion for learning and excels at transforming ideas into impressive designs. It's inspiring to witness their dedication to web development.",
    name: "Abhinav Anand",
    designation: "Aspiring Data Analyst",
    company: "ABC University",
    image: "https://i.ibb.co/02FC0JT/abhinavanand.jpg",
  },
  {
    testimonial:
      "I've never met a developer who truly cares about learning and improving as much as Abhi does.",
    name: "Eshaan Gautam",
    designation: "Engineering Student",
    company: "CTAE Udaipur",
    image: "https://i.ibb.co/Bz4V8SN/eshaan.jpg",
  },
  {
    testimonial:
      "Abhi's enthusiasm for web development is inspiring. It’s always great working alongside such a dedicated learner!",
    name: "Rohan Verma",
    designation: "Aspiring Software Developer",
    company: "NIT Agartala",
    image: "https://i.ibb.co/pwHLLKF/rohan.jpg",
  },
];


const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
