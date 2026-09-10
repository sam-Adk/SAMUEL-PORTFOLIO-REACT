export interface Walkthrough {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  technologies: string[];
  problem: string;
  challenge: string;
  solution: string;
  result: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const walkthroughs: Walkthrough[] = [
  {
    id: "project-one",
    number: "01",
    title: "Project One",
    shortDescription:
      "A practical web application built to solve a real-world problem.",
    description:
      "A full walkthrough of the project, including the problem I wanted to solve, the architecture, key features, and the technical decisions behind the implementation.",

    // Replace this with your YouTube EMBED URL
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

    // Replace this with your actual thumbnail
    thumbnail: "/walkthroughs/project-one.jpg",

    duration: "2:00",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    problem:
      "I wanted to build a practical solution to a problem that users encounter in the real world.",

    challenge:
      "The hardest part was designing the application so that the frontend, backend and data flow worked together reliably.",

    solution:
      "I broke the application into reusable components, built the required API functionality and connected the frontend to the backend through structured API requests.",

    result:
      "The final product is a functional application that demonstrates my ability to take an idea from concept through implementation.",

    liveUrl: "https://your-live-project.com",
    githubUrl: "https://github.com/sam-Adk/project-one",
  },

  {
    id: "project-two",
    number: "02",
    title: "Project Two",
    shortDescription:
      "A modern application focused on usability, functionality and clean implementation.",
    description:
      "A short technical walkthrough showing the product, the development process and the key decisions I made while building it.",

    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

    thumbnail: "/walkthroughs/project-two.jpg",

    duration: "2:00",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
    ],

    problem:
      "The project started with a specific user problem that needed a simple and practical digital solution.",

    challenge:
      "The main challenge was turning the initial idea into an interface that was both intuitive and technically reliable.",

    solution:
      "I designed the interface around the main user flow and implemented the functionality using reusable components and API-driven data.",

    result:
      "The result is a working product that combines a responsive interface with practical functionality.",

    liveUrl: "https://your-live-project.com",
    githubUrl: "https://github.com/sam-Adk/project-two",
  },

  {
    id: "project-three",
    number: "03",
    title: "Project Three",
    shortDescription:
      "A full-stack project demonstrating how I approach product development from idea to implementation.",
    description:
      "A concise walkthrough covering the product, implementation, technical challenges and what I would improve with another iteration.",

    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",

    thumbnail: "/walkthroughs/project-three.jpg",

    duration: "2:00",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],

    problem:
      "I wanted to create a useful product rather than simply build another demonstration project.",

    challenge:
      "The biggest challenge was making several parts of the application work together while keeping the codebase maintainable.",

    solution:
      "I separated the application into logical frontend and backend responsibilities and focused on building the core user experience first.",

    result:
      "The finished project gave me practical experience working through the complete development process from idea to working product.",

    liveUrl: "https://your-live-project.com",
    githubUrl: "https://github.com/sam-Adk/project-three",
  },
];
