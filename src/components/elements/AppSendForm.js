import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { URL_FOR_SEND_EMAIL_FORM } from '../../config/AppConfig';


class AppSendForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  render() {
    return (
      <div>
        <form
          id="gform"
          method="POST"
          action={URL_FOR_SEND_EMAIL_FORM}
        >
          <TextField
            id="name"
            label="Name"
            value={this.state.name}
            onChange={event => this.setState({ name: event.target.value })}
            marginForm
          />
          <TextField
            id="email"
            label="Email"
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
            InputProps={{ placeholder: 'your.name@email.com'}}
            marginForm
          />
          <TextField
            id="message"
            label="Message"
            value={this.state.message}
            onChange={event => this.setState({ message: event.target.value })}
            marginForm
          />
          <Button raised>Send</Button>
        </form>
      </div>
    )
  }
};

export default AppSendForm;
