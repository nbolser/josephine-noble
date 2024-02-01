import { nanoid } from 'nanoid';

export const headData = {
  title: 'Josephine Noble',
  lang: 'en',
  description: 'Personal Portfolio',
};

export const heroData = {
  title: '',
  name: 'Josephine Noble',
  subtitle: 'Salesforce Professional',
  cta: '',
};

export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I’m Josephine Noble, but you can call me Jojo. I’m a Salesforce Architect/Admin living in Missoula, Montana. I have a BA degree in Humanities with a focus on Film Studies from the University of Colorado -  Boulder. I currently work remotely for Slalom.',
  paragraphTwo:
    'I am an experienced problem solver. At my current job you can find me leading new project initiatives and campaigns for different clients and industries, tracking down project requirements, and also providing both solutions and technical architectural support on a variety of services.',
  paragraphThree:
    'In my free time, I am with my dogs Moose and Hank, enjoying the many outdoor activities the Big Sky country has to offer. My personal passions lie in all things exploration – whether it’s breaking ground on a newfound backpacking trip, floating the Missoula or North Fork Flathead River, or tinkering with computer programming.',
  resume: 'https://portfolio-file-bucket-2020.s3.amazonaws.com/Josephone+Noble+Resume.pdf',
};

export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Leeds School of Business: Changing the student culture and external constituent experience through digital communications',
    info: '',
    info2: '',
    url: 'https://portfolio-file-bucket-2020.s3.amazonaws.com/Leedsforce-Forbis+and+Noble+Digital+Comms.pptx',
    repo: '', // if no repo, the button will not show up
  },
];

export const contactData = {
  cta: '',
  btn: '',
  email: 'jojonoble1@gmail.com ',
};
