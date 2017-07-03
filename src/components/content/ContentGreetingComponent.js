import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';


const styleSheet = createStyleSheet('ContentGreetingComponent', {
  contentPage: {
    fontSize: '1.5em',
    textAlign: 'center',
    lineHeight: '1.5',
  },
});

const ContentGreetingComponent = (props) => {
  const classes = props.classes;
  return (
    <div id="greeting">
      <div className="content">
        <div>
          <h1>Hello!</h1>
        </div>
        <div>
          <p className={classes.contentPage}>My Name Is Alexander Fedorov</p>
          <p className={classes.contentPage}>I&#39;m A Junior Web Developer</p>
          <p className={classes.contentPage}>This Site About Me</p>
          <p className={classes.contentPage}>& My Favorite Thing</p>
        </div>
      </div>
    </div>
  );
};

ContentGreetingComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ContentGreetingComponent);
