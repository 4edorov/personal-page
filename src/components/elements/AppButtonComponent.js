import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Chat from 'material-ui-icons/Chat';


const styleSheet = createStyleSheet('AppButtonComponent', theme => ({
  appButton: {
    position: 'fixed',
    right: 40,
    bottom: 40,
    zIndex: 1000,
  },
  mailTo: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  },
}));

const AppButtonComponent = (props) => {
  const classes = props.classes;
  return (
    <Button fab={true} color={"accent"} className={classes.appButton}>
      <a className={classes.mailTo} href="mailto:4edorov@gmail.com">
        <Chat />
      </a>
    </Button>
  );
};

AppButtonComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AppButtonComponent);
