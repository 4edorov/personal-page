import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';


const styleSheet = createStyleSheet('ContentContactsComponent', {
  root:  {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'monospace',
    minHeight: '100vh',
    margin: 50,
  },
  caption: {
    marginBottom: 50,
  },
});

const ContentContactsComponent = props => {
  const classes = props.classes

  return (
    <div id="contacts" className={classes.root}>
      <div className={classes.caption}>
        <h1>Contacts</h1>
      </div>
      <div>
        <p>
          Under Construction
        </p>
      </div>
    </div>
  );
};

ContentContactsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ContentContactsComponent);
