import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  threejs,
  csspf,
  vvlist,
  thispf,
  miva,
  murs,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React.JS Developer',
    icon: reactjs,
  },

  {
    title: 'CSS Styles Player',
    icon: css,
  },

  {
    title: 'Three.JS Learner',
    icon: threejs,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
  {
    title: 'Tailwind CSS Learner',
    icon: tailwind,
  },
  {
    title: 'Backend Learner',
    icon: backend,
  },
  {
    title: 'Meta User',
    icon: meta,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },

  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
]

const experiences = [
  {
    title: 'Production Manager',
    company_name: 'FDcosplaystudio',
    icon: creator,
    iconBg: '#383E56',
    date: 'January 2020 - February 2022',
    points: [
      'Team production organization',
      'Graphics, timelines, planning, scheduling',
      'Deadlines management',
      'Improving production process with new technologies',
      'Procurement organization',
    ],
  },
  {
    title: 'Lead Costume Creator',
    company_name: 'FDcosplaystudio',
    icon: creator,
    iconBg: '#383E56',
    date: 'February 2018 - January 2020',
    points: [
      'Teamwork organization on costume creation',
      'Costume production',
      'Team education',
    ],
  },
  {
    title: 'Freelancer',
    company_name: 'Self Employed',
    icon: creator,
    iconBg: '#383E56',
    date: 'May 2015 - February 2018',
    points: [
      'Costume production',
      'Props production',
      'Individual orders management',
    ],
  },
  {
    title: 'Boardgames Club Co-Owner',
    company_name: 'Self Employed',
    icon: creator,
    iconBg: '#383E56',
    date: '2009-2014',
    points: ['Organization  ', 'Management', 'Games schedules etc.'],
  },
]

const testimonials = [
  {
    testimonial: 'Meow meow meoow meoooow meow meow me',
    name: 'Mivka',
    designation: 'CAT',
    company: 'Cat Corp',
    image: miva,
  },
  {
    testimonial:
      'Meow meow meoow. Meow meow meoow meoooow meow meow me meoooow meow meow me.',
    name: 'Murzik',
    designation: 'Very Important Cat',
    company: 'Cats Buisness Ministry',
    image: murs,
  },
]

const projects = [
  {
    name: 'HTML/CSS Portfolio Course Project',
    description:
      'My first project I made during Web-Dev course in the end of HTML/CSS part. It was a great experience to learn how to make a website from scratch. I was inspired by Cyberpunk style and also work with animations that imitate neon lights.',
    tags: [
      {
        name: 'HTML',
        color: 'blue-text-gradient',
      },
      {
        name: 'CSS',
        color: 'green-text-gradient',
      },
    ],
    image: csspf,
    source_code_link: 'https://github.com/OksanaSherstiuk/My-own-project',
  },
  {
    name: 'Visit WishList in ReactJS',
    description:
      'This project was created as an idea to have a list of favorite places to visit and create some collections of places and keep memories about journeys. It was a great experience to work with ReactJS and Leaflet library. I also used CSS to style the project. This project is still in progress and I am going to add more features to it.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'leaflet',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: vvlist,
    source_code_link: 'https://github.com/OksanaSherstiuk/visit-wish-list',
  },
  {
    name: 'This Portfolio',
    description:
      'This project was created by following a tutorial due to learning purposes, i wanted to work with TailwindCSS and Three.js. I also used React.js to create this portfolio. Tutorial provided on youTube by JavaScript Mastery. ',
    tags: [
      {
        name: 'reactjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
    ],
    image: thispf,
    source_code_link:
      'https://github.com/OksanaSherstiuk/my-portfolio-threejs-react-project',
  },
]

export { services, technologies, experiences, testimonials, projects }
