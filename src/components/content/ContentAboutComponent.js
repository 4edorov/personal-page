import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import bgAbout from '../../assets/static/images/bg_about.jpg';


const styleSheet = theme => ({
  basePage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + bgAbout + ')',
    backgroundAttachment: 'fixed',
    '-webkit-background-size': 'cover',
    '-moz-background-size': 'cover',
    '-o-background-size': 'cover',
    backgroundPosition: 'center center',
  },
  baseLayout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: theme.palette.common.white,
    opacity: '0.8',
  },
  contentPage: {
    textAlign: 'center',
    lineHeight: '1.5',
    color: theme.palette.common.black,
  }
});

const ContentAboutComponent = props => {
  const classes = props.classes;
  return (
    <div id="about-me">
      <div className={classes.basePage}>
        <div className="content">
          <div className={classes.baseLayout}>
            <div className={classes.contentPage}>
              <h1>About Me</h1>
            </div>
            <div>
              <p className='about-2'>
                I&#39;m Master of Economics and Bachelor of Laws. I have nine years
                expirience in these industries and I worked both in a Public Office and
                a Private company.
              </p>
              <p className='about-2'>
                But a few years ago I felt the need for changes, my friend advised me
                to try programming. Well, I recalled myself at high school and at university, it
                was funny to learn programming in Turbo Pascal 7.0 and I was an &#39;A&#39;
                student in mathematics. Why not?!
              </p>
              <p className='about-2'>
                I started to learn HTML, CSS, JavaScript. The key and important point was
                the joining to the freeCodeCamp community at November 2016.
              </p>
              <p className='about-2'>
                Currently, I&#39;m working on a real project as a Web Developer.
                I like it very much and I&#39;m continuously studying new things.
                All actions yield results. It&#39;s awesome!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ContentAboutComponent.propTypes =  {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ContentAboutComponent);
