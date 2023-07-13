import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];
export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-youtube' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-instagram' },
];

export const services = [
  {
    id: 1,
    icon: 'fas fa-ship fa-fw',
    title: 'Canyoning Adventures',
    text: 'Experience heart-pounding canyoning thrills with expert guides.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'Guided Hiking Tours',
    text: 'Discover the tranquility of Brazilian canyons on scenic guided hikes.',
  },
  {
    id: 3,
    icon: 'fas fa-camera fa-fw',
    title: 'Photography Expeditions',
    text: 'Capture stunning images of Brazilian canyons with professional photographers.',
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2024',
    title: 'Farias',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'state of Goiás',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2023',
    title: 'Xingó',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'State of Sergipe',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2023',
    title: 'Furnas',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'State of Minas Gerais',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2024',
    title: 'Espalhado',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'State of Bahia',
    duration: 20,
    cost: 3300,
  },
];
