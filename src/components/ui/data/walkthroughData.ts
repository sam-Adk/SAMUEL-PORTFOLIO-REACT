
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
      'A complete web-scraping pipeline that turns live web pages into structured, actionable data.',
    description:
      'A full-stack data pipeline that starts with a live web page and transforms raw web content into structured data and useful insights. The project combines browser automation, HTML parsing, PostgreSQL and Streamlit into one workflow.',
    videoUrl: 'https://www.youtube.com/embed/gcWazZ5fiiM',
    thumbnail: '/walkthroughs/web-scraper.jpg',
    duration: '2:00',
    technologies: [
      'Playwright',
      'BeautifulSoup',
      'Python',
      'PostgreSQL',
      'Streamlit',
    ],
    problem:
      'Web data is often trapped inside pages that are difficult to analyze directly. I wanted to build a pipeline that could collect live web content and turn it into structured information that could actually be explored and used.',
    challenge:
      'The challenging part was handling the transition from a live web page to reliable structured data while dealing with dynamically rendered content, parsing and database storage.',
    solution:
      'I combined Playwright for browser automation, BeautifulSoup for extracting and parsing page content, PostgreSQL for persistent structured storage, and Streamlit for presenting the resulting information through an interactive interface.',
    result:
      'The result is an end-to-end workflow that demonstrates how I can move from raw web data to a usable analytical product rather than stopping at the scraping stage.',
  },

  {
    id: 'distributed-rate-limiter',
    number: '02',
    title: 'Distributed Rate Limiter',
    shortDescription:
      'A distributed API rate limiter using Token Bucket and Leaky Bucket algorithms with atomic Redis scripts.',
    description:
      'A backend infrastructure project focused on protecting APIs from abuse at scale. The system implements Token Bucket and Leaky Bucket rate-limiting algorithms and uses Redis atomic scripts to keep request handling consistent across distributed application instances.',
    videoUrl: 'https://www.youtube.com/embed/E07D9AjxKsI',
    thumbnail: '/walkthroughs/distributed-rate-limiter.jpg',
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
      'APIs need to control how frequently clients can make requests. Without effective rate limiting, an API can become vulnerable to abuse, excessive traffic and resource exhaustion.',
    challenge:
      'The difficult part was designing rate limiting that remains reliable when multiple application instances are handling requests at the same time. The operations needed to be atomic so concurrent requests could not bypass the limits.',
    solution:
      'I implemented Token Bucket and Leaky Bucket algorithms and used Redis as the shared state store. Redis scripts perform the critical operations atomically, while Node.js and Express provide the API layer and Docker makes the system easier to run consistently.',
    result:
      'The project demonstrates how distributed systems concepts can be applied to build infrastructure that protects APIs while remaining predictable under concurrent traffic.',
  },

  {
    id: 'collab-canvas',
    number: '03',
    title: 'Real-Time Collaborative Canvas',
    shortDescription:
      'A collaborative canvas that allows multiple users to work together on the same digital workspace in real time.',
    description:
      'A real-time collaboration project exploring how shared digital workspaces can synchronize user actions and state across connected clients. The project focuses on the core engineering challenges behind collaborative canvas experiences.',
    videoUrl: 'https://www.youtube.com/embed/aL2n6xaT20Q',
    thumbnail: '/walkthroughs/collab-canvas.jpg',
    duration: '2:00',
    technologies: [
      'React',
      'TypeScript',
      'Canvas',
      'WebSockets',
      'Node.js',
    ],
    problem:
      'Collaborative applications need multiple users to interact with the same workspace while keeping everyone’s view synchronized in real time.',
    challenge:
      'The hardest part was dealing with real-time state synchronization. Changes made by one user need to be propagated to other connected users without making the interface feel slow or inconsistent.',
    solution:
      'I built the canvas experience around real-time communication and synchronized application state, allowing user interactions to be transmitted between connected clients and reflected on the shared workspace.',
    result:
      'The result is a real-time collaborative canvas that demonstrates my ability to work with interactive interfaces, shared state and real-time communication rather than only traditional request-response applications.',
  },
];

