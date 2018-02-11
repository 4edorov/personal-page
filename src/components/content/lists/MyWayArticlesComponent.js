import React from 'react';
import { showResources } from '../../../lib';


const content = [
  {
    name: 'Medium',
    properties: "It's an amazing resource of all what you need",
    link: 'https://medium.com',
    icon: 'fa fa-medium',
  },
  {
    name: 'Alligator.io',
    properties: 'A good resource which I use',
    link: 'https://alligator.io',
    icon: 'fa fa-star-o',
  },
  {
    name: 'The Twelve-Factor App',
    properties: 'About app architecture',
    link: 'https://12factor.net',
    icon: 'fa fa-sticky-note',
  },
];

const MyWayBooksComponent = () => {
  return (
    <div>
      {showResources(content)}
    </div>
  );
};

export default MyWayBooksComponent;
