/**
 * Placeholder images.
 * Replace these URLs with imports from `../assets/images/...` once real images are added.
 *
 * Example (after dropping files into src/assets/images/):
 *   import profilePlaceholder from '../assets/images/profile-placeholder.jpg';
 *   ...
 *   avatar: profilePlaceholder,
 */
const profilePlaceholder =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=900&q=80';
const projectDashpod =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80';
const projectEmbeHome =
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80';
const projectBuild200 =
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80';

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiGraphql,
  SiGit,
  SiGithub,
  SiPostman,
  SiTailwindcss,
} from 'react-icons/si';
import {
  FaAws,
  FaServer,
  FaCloud,
  FaBolt,
  FaBrain,
  FaDatabase,
  FaUserShield,
  FaChartLine,
  FaLock,
} from 'react-icons/fa';

export const personal = {
  name: 'Sai Pavan Vallabhareddy',
  firstName: 'Sai Pavan',
  role: 'Full Stack Developer',
  tagline: 'I craft scalable web apps, cloud-integrated systems & analytics dashboards.',
  intro:
    'I build scalable web applications, cloud-integrated systems, REST APIs, analytics dashboards, and production-ready full-stack solutions.',
  email: 'saipavan2024@gmail.com',
  phone: '+91 8374672844',
  location: 'Kothapeta, India',
  linkedin: 'https://www.linkedin.com/in/pavan-vallabhareddy/',
  github: 'https://github.com/',
  portfolioJourney: 'https://build200.lovable.app',
  resumeUrl: '#',
  avatar: profilePlaceholder,
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { label: 'Projects Built', value: '40+', accent: 'cyan' },
  { label: 'Day Build Streak', value: '200+', accent: 'violet' },
  { label: 'Role', value: 'Full Stack Dev', accent: 'teal' },
  { label: 'Cloud Apps', value: 'AWS Native', accent: 'blue' },
];

export const aboutHighlights = [
  {
    icon: 'code',
    title: 'Frontend Engineering',
    text: 'React, modern JS, responsive UI, reusable component systems & dashboards.',
  },
  {
    icon: 'server',
    title: 'Backend & APIs',
    text: 'Node.js, Express, REST APIs, validation, auth flows & relational schemas.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & AWS',
    text: 'Amplify, Cognito, Lambda, S3, DynamoDB, AppSync, EventBridge, Bedrock.',
  },
  {
    icon: 'spark',
    title: 'Real‑time & AI',
    text: 'Streams, EventBridge workflows, AppSync subscriptions & AI notifications.',
  },
];

export const skillGroups = [
  {
    group: 'Frontend',
    accent: 'cyan',
    items: [
      {
        name: 'React.js',
        Icon: SiReact,
        color: '#61dafb',
        description:
          'Used to build responsive dashboards, reusable UI components, and analytics interfaces with hooks, context, and clean state patterns.',
      },
      {
        name: 'JavaScript',
        Icon: SiJavascript,
        color: '#f7df1e',
        description:
          'Core language for building interactive UIs, async data flows, REST integrations, and 40+ shipped apps.',
      },
      {
        name: 'HTML5',
        Icon: SiHtml5,
        color: '#e34f26',
        description:
          'Semantic, accessible markup forming the foundation of every responsive layout and landing page.',
      },
      {
        name: 'CSS3 / Responsive',
        Icon: SiCss,
        color: '#1572b6',
        description:
          'Modern layouts with Flexbox, Grid, animations, and mobile-first responsive design.',
      },
      {
        name: 'Tailwind CSS',
        Icon: SiTailwindcss,
        color: '#38bdf8',
        description:
          'Utility-first styling for premium, design-system-driven UIs (used to build this portfolio).',
      },
    ],
  },
  {
    group: 'Backend',
    accent: 'violet',
    items: [
      {
        name: 'Node.js',
        Icon: SiNodedotjs,
        color: '#83cd29',
        description:
          'Used to build REST APIs, backend services, and integration layers between databases and React clients.',
      },
      {
        name: 'Express.js',
        Icon: SiExpress,
        color: '#ffffff',
        description:
          'Routing, middleware, validation, authentication and structured REST APIs for production apps.',
      },
      {
        name: 'REST APIs',
        Icon: FaServer,
        color: '#22d3ee',
        description:
          'Designed and consumed REST APIs for dashboards, inventory systems, and analytics workflows.',
      },
      {
        name: 'GraphQL',
        Icon: SiGraphql,
        color: '#e535ab',
        description:
          'Used with AWS AppSync for typed schemas, queries, mutations, and real-time subscriptions.',
      },
    ],
  },
  {
    group: 'Database',
    accent: 'teal',
    items: [
      {
        name: 'MySQL',
        Icon: SiMysql,
        color: '#00758f',
        description:
          'Used for schema design, complex queries, joins, and the optimized inventory schema for EmbeHome.',
      },
      {
        name: 'SQLite',
        Icon: SiSqlite,
        color: '#0f80cc',
        description:
          'Lightweight relational storage for prototypes, internal tools and learning projects.',
      },
      {
        name: 'DynamoDB',
        Icon: FaDatabase,
        color: '#4053d6',
        description:
          'Used for real-time analytics, leaderboard data, and serverless cloud workflows.',
      },
      {
        name: 'Firebase',
        Icon: SiFirebase,
        color: '#ffca28',
        description:
          'Auth, realtime DB, and quick deployment for full-stack experiments and side projects.',
      },
    ],
  },
  {
    group: 'Cloud & AWS',
    accent: 'blue',
    items: [
      {
        name: 'AWS Amplify',
        Icon: FaAws,
        color: '#ff9900',
        description:
          'Hosting, CI/CD, auth and backend wiring for full-stack React apps deployed on AWS.',
      },
      {
        name: 'AWS Lambda',
        Icon: FaBolt,
        color: '#ff9900',
        description:
          'Used for serverless workflows, real-time leaderboard processing and event-driven backends.',
      },
      {
        name: 'AWS S3',
        Icon: FaAws,
        color: '#569a31',
        description:
          'Object storage for media, exports, and asset pipelines with secure signed access.',
      },
      {
        name: 'AWS Cognito',
        Icon: FaUserShield,
        color: '#dd344c',
        description:
          'User pools, sign-in/sign-up flows and secure auth for production React apps.',
      },
      {
        name: 'AWS IAM',
        Icon: FaLock,
        color: '#dd344c',
        description:
          'Least-privilege roles, policies, and securing service-to-service permissions.',
      },
      {
        name: 'AppSync',
        Icon: FaCloud,
        color: '#ff4f8b',
        description:
          'Managed GraphQL API with real-time subscriptions powering live dashboards.',
      },
      {
        name: 'EventBridge',
        Icon: FaBolt,
        color: '#ff9900',
        description:
          'Event routing between services for AI-powered notifications and cross-service workflows.',
      },
      {
        name: 'CloudWatch',
        Icon: FaChartLine,
        color: '#759eff',
        description:
          'Logs, metrics and alarms used for monitoring Lambda, API, and DynamoDB pipelines.',
      },
      {
        name: 'AWS Bedrock',
        Icon: FaBrain,
        color: '#a855f7',
        description:
          'Used for AI-powered notification workflows and generative content automation.',
      },
    ],
  },
  {
    group: 'Developer Tools',
    accent: 'cyan',
    items: [
      {
        name: 'Git',
        Icon: SiGit,
        color: '#f05033',
        description:
          'Version control, branching strategies, and clean commit history across 40+ projects.',
      },
      {
        name: 'GitHub',
        Icon: SiGithub,
        color: '#ffffff',
        description:
          'Hosting code, PR reviews, and showcasing the 200‑day build journey publicly.',
      },
      {
        name: 'Thunder Client',
        Icon: SiPostman,
        color: '#ff6c37',
        description:
          'API testing, request collections and debugging REST endpoints during development.',
      },
    ],
  },
];

export const experiences = [
  {
    role: 'Full Stack Developer (Cloud & Web)',
    company: '2SSquare Solutions',
    period: 'May 2024 – Present',
    location: 'Remote / India',
    bullets: [
      'Built analytics dashboards and reusable React components used across multiple modules.',
      'Improved UI responsiveness and significantly reduced page load times.',
      'Designed and shipped REST APIs with Node.js and Express, including validation and auth.',
      'Integrated AWS Amplify, Cognito and S3 for hosting, authentication, and asset storage.',
      'Built event-driven workflows using AWS Lambda + DynamoDB Streams for real-time data.',
      'Worked with Firebase, AppSync and AI-powered notification workflows on AWS Bedrock.',
    ],
    chips: ['React', 'Node.js', 'AWS', 'DynamoDB', 'AppSync', 'Lambda', 'Cognito'],
  },
];

export const projects = [
  {
    title: 'Dashpod',
    subtitle: 'Sports & Fitness Analytics Platform',
    image: projectDashpod,
    description:
      'A production-grade sports & fitness analytics platform with rich dashboards, ranking systems, real-time sync, and cloud-integrated workflows.',
    features: [
      'Interactive dashboards with player performance tracking',
      'Real-time ranking & leaderboard via Lambda + DynamoDB Streams',
      'Cloud sync with AWS Amplify, AppSync & Cognito auth',
      'Reusable analytics charts and reusable React component system',
    ],
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'AWS Lambda',
      'AppSync',
      'DynamoDB',
      'Amplify',
      'MySQL',
    ],
    links: { live: '#', github: '#' },
    accent: 'cyan',
  },
  {
    title: 'EmbeHome',
    subtitle: 'Inventory & Storage System',
    image: projectEmbeHome,
    description:
      'A full-stack inventory and storage management system with stock tracking, lifecycle management, validations and detailed reports.',
    features: [
      'CRUD product lifecycle management with validations',
      'Optimized MySQL schema with indexes and joins',
      'Reports, filtering and stock movement tracking',
      'REST APIs with Express.js and clean service layer',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'REST APIs'],
    links: { live: '#', github: '#' },
    accent: 'violet',
  },
  {
    title: '200 Days Build Journey',
    subtitle: 'Public Project Showcase Platform',
    image: projectBuild200,
    description:
      'A public showcase platform documenting 200+ continuous days of building — featuring 40+ deployed projects, REST APIs, dashboards, SQL apps, JS demos and AWS features.',
    features: [
      '40+ deployed projects across full-stack categories',
      '200+ day continuous development streak',
      'Searchable, categorized project gallery',
      'Live deployment pipelines and demos',
    ],
    tech: ['React.js', 'JavaScript', 'Node.js', 'AWS', 'Firebase'],
    links: { live: 'https://build200.lovable.app', github: '#' },
    accent: 'teal',
  },
];

export const achievements = [
  {
    title: '200‑Day Full Stack Challenge',
    value: '200+',
    description:
      'Completed a continuous 200+ day full-stack development challenge — shipping daily.',
  },
  {
    title: 'Projects Built & Deployed',
    value: '40+',
    description:
      'Built and deployed 40+ projects spanning REST APIs, dashboards, CRUD apps, and AWS features.',
  },
  {
    title: 'Continuous Build Streak',
    value: '200+',
    description:
      'Maintained an unbroken 200+ day streak of building, learning and shipping consistently.',
  },
  {
    title: 'Showcase Platform',
    value: 'Live',
    description:
      'Built a public platform (build200.lovable.app) to publish and document the entire journey.',
  },
];

export const education = [
  {
    school: 'BVC Engineering College',
    degree: 'B.Tech in Computer Science Engineering (AI & DS)',
    period: '2020 – 2024',
    detail: 'CGPA: 7.98',
  },
];

export const certificates = [
  {
    title: 'Build Your Own Responsive Website',
    issuer: 'Online Certification',
    accent: 'cyan',
  },
  {
    title: 'Programming Foundations with Python',
    issuer: 'Online Certification',
    accent: 'violet',
  },
  { title: 'Node.js', issuer: 'Online Certification', accent: 'teal' },
  { title: 'JavaScript Essentials', issuer: 'Online Certification', accent: 'blue' },
  { title: 'Introduction to Databases', issuer: 'Online Certification', accent: 'cyan' },
  { title: 'Generative AI', issuer: 'Online Certification', accent: 'violet' },
];
