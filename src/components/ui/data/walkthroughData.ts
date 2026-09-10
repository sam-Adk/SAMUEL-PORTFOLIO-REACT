
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
    id: 'web-scraper',
    number: '01',
    title: 'Web Scraper & Insight Pipeline',

    shortDescription:
      'From a live web page to structured data and actionable insights using browser automation, parsing, databases and analytics.',

    description:
      'A complete web-scraping and data pipeline that transforms live web content into structured, usable information. The project combines Playwright, BeautifulSoup, PostgreSQL and Streamlit to move from web data collection all the way to an interactive analytics experience.',

    videoUrl:
      'https://www.youtube.com/embed/gcWazZ5fiiM',

    thumbnail:
      '/walkthroughs/web scrapper pf.jpg',

    duration: '2:00',

    technologies: [
      'Playwright',
      'BeautifulSoup',
      'Python',
      'PostgreSQL',
      'Streamlit',
    ],

    problem:
      'Websites contain large amounts of potentially useful information, but that information is often difficult to collect, structure and analyze efficiently. I wanted to build a complete workflow that could take information from a live web page and turn it into something useful.',

    challenge:
      'The challenging part was connecting the different stages of the pipeline reliably. The system needed to interact with live web pages, extract the relevant information, clean and structure the data, store it in PostgreSQL and then make that information useful through an interface.',

    solution:
      'I used Playwright for browser automation and interacting with live web pages, BeautifulSoup for parsing HTML and extracting information, PostgreSQL for structured data storage, and Streamlit to build an interactive interface for exploring the resulting data and insights.',

    result:
      'The result is an end-to-end data pipeline that demonstrates how I can move from raw web content to structured data and finally to an application that makes that data useful and actionable.',
  },

  {
    id: 'distributed-rate-limiter',
    number: '02',
    title: 'Distributed Rate Limiter',

    shortDescription:
      'A distributed API rate limiter using Token Bucket and Leaky Bucket algorithms with atomic Redis scripts to protect APIs from abuse.',

    description:
      'A backend infrastructure project focused on protecting APIs from excessive traffic and abuse. The system explores Token Bucket and Leaky Bucket rate-limiting algorithms and uses Redis atomic scripts to maintain consistent rate limits across distributed application instances.',

    videoUrl:
      'https://www.youtube.com/embed/E07D9AjxKsI',

    thumbnail:
      '/walkthroughs/distributed rate limiter pf.jpg',

    duration: '2:00',

    technologies: [
      'Node.js',
      'Express',
      'Redis',
      'Docker',
      'JavaScript',
      'Lua',
    ],

    problem:
      'APIs need to control how frequently clients can send requests. Without effective rate limiting, excessive traffic or abusive clients can consume resources and negatively affect availability for legitimate users.',

    challenge:
      'The biggest challenge was making the rate limiter work reliably in a distributed environment. Multiple API instances may receive requests at the same time, so the rate-limiting operations need to be consistent and atomic rather than relying on isolated application memory.',

    solution:
      'I implemented Token Bucket and Leaky Bucket algorithms with Redis acting as shared state. Redis scripts handle critical operations atomically, while Node.js and Express provide the API layer. Docker is used to package and run the different components consistently.',

    result:
      'The project demonstrates practical experience with distributed systems, API infrastructure, concurrency and caching. It shows how rate limiting can be designed to protect APIs even when requests are being handled across multiple application instances.',
  },

  {
    id: 'collab-canvas',
    number: '03',
    title: 'Real-Time Collaborative Canvas',

    shortDescription:
      'A real-time collaborative canvas where multiple users can interact with the same shared workspace and see changes live.',

    description:
      'A real-time collaboration project exploring how multiple connected users can work together on a shared digital canvas. The project focuses on interactive canvas functionality, real-time communication and keeping shared application state synchronized between users.',

    videoUrl:
      'https://www.youtube.com/embed/aL2n6xaT20Q',

    thumbnail:
      '/walkthroughs/collab on canvas pf.jpg',

    duration: '2:00',

    technologies: [
      'React',
      'TypeScript',
      'Canvas',
      'WebSockets',
      'Node.js',
    ],

    problem:
      'Collaborative applications need multiple users to interact with the same workspace while keeping everyone synchronized. A change made by one user should be reflected for the other connected users without requiring them to manually refresh the application.',

    challenge:
      'The hardest part was handling real-time state synchronization. User actions need to be transmitted between connected clients and reflected on the shared canvas while keeping the experience responsive and consistent.',

    solution:
      'I built the canvas experience around real-time communication and synchronized application state. User interactions are transmitted between connected clients so that changes to the shared workspace can be reflected across the collaboration session.',

    result:
      'The result is a real-time collaborative canvas demonstrating experience beyond traditional request-response applications. It combines interactive frontend development with real-time communication and shared state synchronization.',
  },
];



