import React from 'react';
import { showResources } from '../../../lib';

const content = [
  {
    name: 'freeCodeCamp',
    properties: "It's a freeCodeCamp!",
    link: 'https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ/featured',
    icon: 'fab fa-youtube',
  },
  {
    name: 'Google Chrome Developers',
    properties: 'Making the web more awesome',
    link: 'https://www.youtube.com/user/ChromeDevelopers/featured',
    icon: 'fab fa-youtube',
  },
  {
    name: 'Douglas Crockford: The Better Parts - JSConfUY 2014',
    properties: 'Douglas Crockford...',
    link: 'https://youtu.be/bo36MrBfTk4',
    icon: 'fab fa-youtube',
  },
];

const MyWayVideosComponent = () => {
  return (
    <div>
      {showResources(content)}
    </div>
  );
};

export default MyWayVideosComponent;
