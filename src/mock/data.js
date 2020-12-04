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
    'I’m Josephine Noble, but you can call me Jojo. I’m a Salesforce Administrator and Business Analyst living in Denver, Colorado. I have a degree in Communications and Media Studies from the University of Colorado -  Boulder. I currently work for the Leeds School of Business at my alma mater. Go Buffs!',
  paragraphTwo:
    'I am an experienced problem solver. At my current job you can find me leading new project initiatives and campaigns for the different schools, tracking down project requirements from Assistant Deans, and also providing administrative and technical support for a wide variety of users at CU.',
  paragraphThree:
    'In my free time, and with my dogs Moose and Bart at my side, I enjoy many outdoor activities the Rocky Mountains have to offer. My personal passions lie in all things exploration – whether it’s breaking ground on a newfound backpacking trip, floating the Colorado River, or tinkering with computer programming.',
  resume: 'https://drive.google.com/file/d/10OEwfnFKStLfHEHLwl0SLmzmpeXwtUl1/view?usp=sharing',
};

export const projectsData = [
  {
    id: nanoid(),
    img: 'project.JPG',
    title: 'Changing the student culture and external constituent experience through digital communications',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

export const contactData = {
  cta: '',
  btn: '',
  email: 'jojonoble1@gmail.com ',
};
