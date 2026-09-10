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
    id: 'project-one',
    number: '01',
    title: 'Project One',
    shortDescription:
      'A practical web application built to solve a real-world problem.',
    description:
      'A short walkthrough of the project, including what I built, the problem I wanted to solve, the challenges I faced and the technical decisions behind the implementation.',

    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',

    thumbnail: '/walkthroughs/project-one.jpg',

    duration: '2:00',

    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
    ],

    problem:
      'I wanted to build a practical solution to a real-world problem.',

    challenge:
      'The hardest part was connecting the different parts of the application while keeping the user experience simple and reliable.',

    solution:
      'I broke the application into reusable components and connected the frontend and backend through structured APIs.',

    result:
      'The result is a working application that demonstrates my ability to take an idea from concept to implementation.',

    liveUrl: 'https://your-live-project.com',
    githubUrl: 'https://github.com/sam-Adk/project-one',
  },

  {
    id: 'project-two',
    number: '02',
    title: 'Project Two',
    shortDescription:
      'A modern application focused on usability, functionality and clean implementation.',
    description:
      'A short technical walkthrough showing the product, development process and key decisions I made while building it.',

    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',

    thumbnail: '/walkthroughs/project-two.jpg',

    duration: '2:00',

    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
    ],

    problem:
      'The project started with a specific user problem that needed a simple digital solution.',

    challenge:
      'The main challenge was turning the initial idea into an interface that was intuitive and technically reliable.',

    solution:
      'I designed the interface around the main user flow and implemented the functionality using reusable components.',

    result:
      'The finished product combines a responsive interface with practical functionality.',

    liveUrl: 'https://your-live-project.com',
    githubUrl: 'https://github.com/sam-Adk/project-two',
  },

  {
    id: 'project-three',
    number: '03',
    title: 'Project Three',
    shortDescription:
      'A full-stack project demonstrating how I approach product development from idea to implementation.',
    description:
      'A concise walkthrough covering the product, implementation, technical challenges and what I would improve with another iteration.',

    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',

    thumbnail: '/walkthroughs/project-three.jpg',

    duration: '2:00',

    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'MongoDB',
    ],

    problem:
      'I wanted to create a useful product rather than simply build another demonstration project.',

    challenge:
      'The biggest challenge was making several parts of the application work together while keeping the codebase maintainable.',

    solution:
      'I separated the application into logical frontend and backend responsibilities and focused on the core user experience first.',

    result:
      'The finished project gave me practical experience working through the complete development process.',

    liveUrl: 'https://your-live-project.com',
    githubUrl: 'https://github.com/sam-Adk/project-three',
  },
];
