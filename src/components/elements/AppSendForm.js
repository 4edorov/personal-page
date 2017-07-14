import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { URL_FOR_SEND_EMAIL_FORM } from '../../config/AppConfig';


const styleSheet = createStyleSheet('AppSendForm', {
  container: {
    width: 300,
  },
  inputForms: {
    display: 'flex',
    flexDirection: 'column',
  }
});

class AppSendForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container}>
        <Card>
          <CardHeader title="Contact Form" />
          <CardContent className={classes.inputForms}>
            <TextField
              id="name"
              label="Name"
              InputProps={{ placeholder: 'Enter your name'}}
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value})}
              marginForm
            />
            <TextField
              id="email"
              label="Email"
              InputProps={{ placeholder: 'your.name@name.com'}}
              value={this.state.email}
              onChange={event => this.setState({ email: event.target.value})}
              marginForm
            />
            <TextField
              id="multiline-static"
              multiline
              rows="4"
              label="Message"
              InputProps={{ placeholder: 'What\'s on your mind...'}}
              value={this.state.message}
              onChange={event => this.setState({ message: event.target.value})}
              marginForm
            />
          </CardContent>
          <CardActions>
            <Button raised>Send</Button>
          </CardActions>

          <form
            id="gform"
            method="POST"
            action={URL_FOR_SEND_EMAIL_FORM}
          >
          </form>
        </Card>
      </div>
    )
  }
};

export default withStyles(styleSheet)(AppSendForm);
