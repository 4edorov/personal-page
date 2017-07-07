import React from 'react';
import mongoLogo from '../../../assets/static/images/way_mongo_logo.png';
import { showTechnologies } from '../../../lib';


const data = [
  {name: 'Mongo', src: mongoLogo, link: 'https://www.mongodb.com',},
];

const MyWayDataComponent = () => {
  return (
    <div>
      {showTechnologies(data)}
    </div>
  );
};

export default MyWayDataComponent;
