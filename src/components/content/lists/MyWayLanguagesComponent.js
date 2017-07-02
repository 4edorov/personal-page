import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import jsLogo from '../../../assets/static/images/way_js_logo.png';
import tsLogo from '../../../assets/static/images/way_ts_logo.png';
import htmlLogo from '../../../assets/static/images/way_html_logo.png';
import cssLogo from '../../../assets/static/images/way_css_logo.png';
import { showTechnologies } from '../../../lib';


const languages = [
  {
    name: 'JavaScript',
    src: jsLogo,
    link: 'https://www.ecma-international.org',
  },
  {
    name: 'HTML',
    src: htmlLogo,
    link: 'https://www.w3.org',
  },
  {
    name: 'CSS',
    src: cssLogo,
    link: 'https://www.w3.org/Style',
  },
  {
    name: 'TypeScript',
    src: tsLogo,
    link: 'https://www.typescriptlang.org',
  },
];

const styleSheet = createStyleSheet('MyWayLanguagesComponent', {
  main: {
  },
});

const MyWayLanguagesComponent = (props) => {
  const classes = props.classes;
  return (
    <div className={classes.main}>
      {showTechnologies(languages)}
    </div>
  );
};

export default withStyles(styleSheet)(MyWayLanguagesComponent);
