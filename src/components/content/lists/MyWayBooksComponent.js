import React from 'react';
import { showResources } from '../../../lib';

const content = [
  {
    name: 'JavaScript The Definitive Guide (6 ed.) David Flanagan',
    properties: 'The basics...',
    link: 'http://shop.oreilly.com/product/9780596805531.do',
    icon: 'fas fa-book',
  },
  {
    name: 'Learning Web App Development: Build Quickly with Proven JavaScript. Semmy Purewal',
    properties: 'Grasp the fundamentals of web application development by building a simple database-backed app from scratch, using HTML, JavaScript, and other open source tools',
    link: 'http://shop.oreilly.com/product/0636920030621.do',
    icon: 'fas fa-book',
  },
  {
    name: "You Don't Know JS (book series)",
    properties: 'Must read...',
    link: 'https://github.com/getify/You-Dont-Know-JS',
    icon: 'fas fa-book',
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
