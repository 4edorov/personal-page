import React from 'react';
import { showResources } from '../../../lib';

const content = [
  {
    name: 'freeCodeCamp',
    properties: 'The community that helps learn to code, then get experience by contributing to open source projects used by nonprofits',
    link: 'https://www.freecodecamp.com',
    icon: 'fab fa-free-code-camp',
  },
  {
    name: 'Fundamentals of functional programming by Preethi Kasireddy',
    properties: 'Free email course that will take you on a fun and exploratory journey into understanding principles of functional programming',
    link: 'https://medium.freecodecamp.org/learning-the-fundamentals-of-functional-programming-425c9fd901c6',
    icon: 'fab fa-medium',
  },
  {
    name: 'Progressive Web Apps Training',
    properties: 'This course shows you how to convert web pages to PWAs',
    link: 'https://developers.google.com/web/ilt/pwa/',
    icon: 'fab fa-google',
  },
  {
    name: 'Codecademy',
    properties: 'An education company. There is a very good React training',
    link: 'https://www.codecademy.com',
    icon: 'fas fa-file-code',
  },
];

const MyWayProgrammsComponent = () => {
  return (
    <div>
      {showResources(content)}
    </div>
  );
};

export default MyWayProgrammsComponent;
