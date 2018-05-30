import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import { CONTACTS } from '../../config/AppConfig';

const styleSheet = theme => ({
  root: {
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
  chip: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: 250,
    margin: '25px 0px',
  },
});

const ContentContactsComponent = props => {
  const classes = props.classes

  return (
    <div className={classes.root}>
      <div className={classes.caption}>
        <h1>Contacts</h1>
      </div>
      <div>
        {CONTACTS.map((contact, index) => (
          <Chip
            key={index}
            className={classes.chip}
            avatar={<Avatar><Icon className={contact.icon} /></Avatar>}
            label={contact.title}
            onClick={() => (window.open(contact.link))}
          />
        ))}
      </div>
    </div>
  );
};

ContentContactsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ContentContactsComponent);
