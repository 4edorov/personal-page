import React from 'react';
import BookmarkBorder from 'material-ui-icons/BookmarkBorder';
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
];

const MyWayBooksComponent = () => {
  return (
    <div>
      {showResources(content, <BookmarkBorder />)}
    </div>
  );
};

export default MyWayBooksComponent;
