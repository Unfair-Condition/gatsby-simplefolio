import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Akshat Srivastava', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Akshat Srivastava',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a sophomore who loves to code.',
  paragraphTwo: 'Python | Data Science | Machine Learning',
  paragraphThree: 'Finance | Badminton',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'CoffeeMachine.jpg',
    title: 'Coffee Machine',
    info: 'A simple starter project in python showing how a coffee machine works!',
    info2: '',
    url: '',
    repo: 'https://github.com/Unfair-Condition/Coffee-Machine', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'akshat182001@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/akshat_1801',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/akshat-s-code',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Unfair-Condition',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
