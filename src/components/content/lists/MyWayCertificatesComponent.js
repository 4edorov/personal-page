import React from 'react';
import fccLogo from '../../../assets/static/images/way_cert_fcc.png';
import { showTechnologies } from '../../../lib';

const certificates = [
  { name: 'Front End Dev', src: fccLogo, link: 'https://www.freecodecamp.org/4edorov/front-end-certification', },
];

const MyWayCertificatesComponent = () => {
  return (
    <div>
      {showTechnologies(certificates)}
    </div>
  );
};

export default MyWayCertificatesComponent;
