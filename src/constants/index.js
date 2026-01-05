import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "ML Engineer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Research & Development",
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
    name: "MongoDB",
    icon: mongodb,
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

];

const experiences = [
  {
    title: "VCIS Intern",
    company_name: "University of Delhi - Dean Students' Welfare",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Authored and designed the official Culture Council Annual Report documenting University centenary events.",
      "Presented the report to the Vice Chancellor and published it on the DU website.",
      "Developed and maintained the official website for the Culture Council Department.",
      "Managed department dataset and assisted in processing data for over 6,500+ applicants during the ECA Admission cycle.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Tushar demonstrated exceptional skills in both technical development and research during his time with us.",
    name: "Prof.	Ravinder	Kumar",
    designation: "Dean",
    company: "Culture Council Department",
  },
  {
    testimonial:
      "An outstanding student who combines academic excellence with practical innovation in software development.",
    name: "Prof. Veenu Bhasin",
    designation: "Computer Science Department",
    company: "P.G.D.A.V. College",
  },
  {
    testimonial:
      "Tushar's published research and award-winning achievements reflect his dedication to excellence.",
    name: "Dr. Hemant Verma",
    designation: "Joint Dean",
    company: "Culture Council Department",
  },
];

const projects = [
  {
    name: "Notes App",
    description:
      "Full-stack MERN application for managing personal notes with secure authentication. Features include Create, Read, Update, Delete operations and JWT-based authentication for seamless user experience.",
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
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/tushar-1800/Notes_app",
  },
  {
    name: "Lung Disease Prediction",
    description:
      "Machine Learning project for heart disease prediction with 13 features. Implemented preprocessing, EDA, and trained Logistic Regression, Decision Tree, Naive Bayes, and SVM models with up to 91% accuracy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://drive.google.com/file/d/1RBuVv7THN1iJ-iZbh-hsg4IHvVJDMLm5/view",
  },
  {
    name: "College Society Website (Parikalan.in)",
    description:
      "Comprehensive website for P.G.D.A.V. (M) College Computer Science Society. Serves as a platform for students to explore programming, design, networking through clubs, hackathons, workshops, and competitions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.parikalan.in/",
  },
  {
    name: "Culture Council Department Website",
    description:
      "Developed a simple yet functional website for the Culture Council Department of Delhi University. Features include information on cultural events, initiatives, and student participation with clean UI and easy navigation.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/tushar-1800/Culture-Council-Website.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
