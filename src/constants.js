import githubLogo from "./assets/github-logo.svg";
import linkedinLogo from "./assets/linkedin-logo.svg";
import emailLogo from "./assets/email-logo.svg";

// Centralized data/constants module
// This file aggregates all shared constant data used across the app.

// Core "About" concepts
export const CORE_CONCEPTS = [
  {
    title: "About",
    description:
      "Full Stack Developer at the startup Slash-in. I graduated with a Bachelor's degree in Computer Science from The Academic College of Tel Aviv-Yafo. I'm highly skilled in self-learning, ambitious, and experienced in handling tasks under pressure. I value working in a clean and organized environment. Highly motivated with a strong willingness to learn and enhance my skills.",
  },
];

// Connection / social links
export const CONNECTION_DATA = {
  github: {
    title: "Github",
    logo: githubLogo,
    url: "https://github.com/DvirMagen",
  },
  linkedin: {
    title: "LinkedIn",
    logo: linkedinLogo,
    url: "https://www.linkedin.com/in/dvir-magen-3b900421b/",
  },
  email: {
    title: "DvirMagen@Gmail.com",
    logo: emailLogo,
    url: "mailto:Dvirmagen@Gmail.com",
  },
};

// Education & experience timeline data
export const EDUCATION_DATA = [
  {
    tag: "Education",
    title: "B.Sc. Computer Science",
    academy: "The Academic College of Tel Aviv-Yafo",
    years: "Oct 2020 - Apr 2024",
  },
];

export const EXPERIENCE_DATA = [
  {
    title: "Full Stack Developer",
    organization: "Slash-in",
    period: "Mar 2025 - Present",
    achievements: [
      "Design, develop, and maintain scalable, cloud-based web applications covering the full development cycle from intuitive user interfaces to secure, serverless backend services powered by AWS Amplify",
      "Develop rich, responsive interfaces using React, Next.js, and TypeScript, combined with MUI and react-hook-form-mui",
      "Build modular and reusable UI components, multi-step forms, and dynamic editor flows that enhance user experience and maintain code consistency across the application",
      "Utilize AWS Amplify to build and manage serverless cloud infrastructure, handling authentication, authorization, and data storage",
      "Design secure data models, manage user permissions, and seamlessly connect Amplify services with the React frontend",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "AWS Amplify",
      "MUI",
      "react-hook-form-mui",
      "Serverless",
      "Cloud Infrastructure",
    ],
    url: "https://slash-in.com",
  },
];

// Projects data
export const CORE_PROJECTS = {
  cr: {
    title: "Cosmic Race",
    description:
      "A competitive multiplayer racing game where players race to the finish line while navigating obstacles and defending against competitors.",
    achievements: [
      "Developed a robust game server using Java, handling common gaming challenges such as timeouts, lags, and interruptions",
      "Built game client using Unity and C# for cross-platform compatibility",
      "Implemented Azure cloud storage for game data and server infrastructure",
      "Created web server using Node.js with efficient database operations",
      "Implemented two communication protocols, including Socket-based online mode for real-time multiplayer interaction",
    ],
    stack: ["C#", "Unity", "Java", "Node.js", "Sockets", "Azure"],
    url: "https://github.com/DvirMagen/CosmicRace",
  },
  abs: {
    title: "Alternative Banking System",
    description:
      "A client/server banking application system for lenders and borrowers with separate admin and client interfaces.",
    achievements: [
      "Developed JavaFX applications for both admin and client interfaces",
      "Implemented HTTP-based communication between clients and server",
      "Designed and implemented multi-threading architecture including thread pool management with internal blocking queues",
      "Ensured thread synchronization for concurrent operations",
    ],
    stack: ["Java", "JavaFX", "HTTP", "Multi-threading"],
    url: "https://github.com/DvirMagen/ABS-Project",
  },
  nlp: {
    title: "NLP Clustering Project",
    description:
      "Natural language processing system that identifies and clusters unhandled user requests using intent classifier uncertainty.",
    achievements: [
      "Implemented intent classification with confidence thresholding to identify unrecognized requests",
      "Developed clustering algorithms to surface topical clusters in unhandled requests",
      "Created cluster representative extraction and automated labeling system",
      "Improved system's ability to handle ambiguous queries (e.g., 'How does quarantine work')",
    ],
    stack: ["Python", "NLP", "Machine Learning", "Clustering"],
    url: "https://github.com/DvirMagen/NLP_final_project",
  },
  weetbis: {
    title: "Weet&Bis - Restaurant Management System",
    description:
      "Backend service for a restaurant management system handling restaurants, ratings, dishes, and orders through RESTful APIs.",
    achievements: [
      "Developed RESTful APIs for restaurant, rating, dish, and order management",
      "Implemented PostgreSQL database for scalable data storage",
      "Built application using Java Spring Boot framework",
      "Designed stateless API architecture following REST principles for efficient client-server communication",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "RESTful APIs"],
    url: "https://github.com/DvirMagen/weetbis",
  },
};