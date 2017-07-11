import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { URL_FOR_SEND_EMAIL_FORM } from '../../config/AppConfig';


class AppSendForm extends Component {
  state = {
    name: '',
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
        </form>
      </div>
    )
  }
};

export default AppSendForm;
