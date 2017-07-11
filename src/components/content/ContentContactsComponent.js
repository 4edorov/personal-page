import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import { CONTACTS } from '../../config/AppConfig';
import AppSendForm from '../elements/AppSendForm';


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
    <div id="contacts" className={classes.root}>
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
      <div>
        <AppSendForm />
      </div>
    </div>
  );
};

ContentContactsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ContentContactsComponent);
