import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import bgGreeting from '../../assets/static/images/bg_greeting.jpg';

const styleSheet = theme => ({
  contentPage: {
    fontSize: '1.5em',
    textAlign: 'center',
    lineHeight: '1.5',
    color: theme.palette.common.black,
  },
  baseLayout: {
    width: '100%',
    backgroundColor: theme.palette.common.white,
    opacity: '0.8',
  },
  basePage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + bgGreeting + ')',
    backgroundAttachment: 'fixed',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    backgroundPosition: 'center center',
  },
  contentHeader: {
    textAlign: 'center',
    color: theme.palette.common.black,
  },
});

const ContentGreetingComponent = props => {
  const classes = props.classes;
  return (
    <div>
      <div className={classes.basePage}>
        <div className='content'>
          <div className={classes.baseLayout}>
            <div>
              <h1 className={classes.contentHeader}>Hello!</h1>
            </div>
            <div>
              <p className={classes.contentPage}>My Name Is Alexander Fedorov</p>
              <p className={classes.contentPage}>I&#39;m A Junior Web Developer</p>
              <p className={classes.contentPage}>This Site About Me</p>
              <p className={classes.contentPage}>& My Favorite Thing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentGreetingComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ContentGreetingComponent);
