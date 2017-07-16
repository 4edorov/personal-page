import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { connect } from 'react-redux';
import { toggleSendDrawer } from '../../actions';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Close from 'material-ui-icons/Close';
import Cancel from 'material-ui-icons/Cancel';
import Check from 'material-ui-icons/Check';
import { URL_FOR_SEND_EMAIL_FORM } from '../../config/AppConfig';


const styleSheet = createStyleSheet('AppSendForm', {
  container: {
    width: 300,
  },
  inputForms: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = (state) => ({
  open: state.toggleSendDrawer,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSendDrawer(mode) {
    dispatch(toggleSendDrawer(mode));
  },
});

class AppSendForm extends Component {
  state = {
    form: {
      name: '',
      email: '',
      message: '',
    },
    checkEmail: false,
  };
  handleDrawerClose = () => {
    this.props.toggleSendDrawer(false);
  };

  validEmail = (email) => {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  getFormData = (messageFields) => {
    let validateMessageFields = {};
    Object.keys(messageFields).forEach(field => {
      if (messageFields[field].length > 0) {
        validateMessageFields[field] = messageFields[field];
      }
    });
    return validateMessageFields;
  };

  handleFormSubmit = () => {
    const data = this.getFormData(this.state.form);
    let url = URL_FOR_SEND_EMAIL_FORM;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(JSON.stringify(data));
    this.handleDrawerClose();
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.container}>
        <Card>
          <CardHeader
            title={
              <div className={classes.titleHeader}>
                <span>Contact Form</span>
                <IconButton onClick={this.handleDrawerClose}><Close /></IconButton>
              </div>
            }
          />
          <CardContent className={classes.inputForms}>
            <TextField
              id="name"
              label="Name"
              InputProps={{ placeholder: 'Enter your name'}}
              value={this.state.form.name}
              onChange={event => this.setState({ form: {...this.state.form, name: event.target.value}})}
              marginForm
            />
            <div>
              <TextField
                id="email"
                label="Email"
                InputProps={{ placeholder: 'your.name@name.com'}}
                value={this.state.form.email}
                onChange={event => {
                  this.setState({ form: {...this.state.form, email: event.target.value}});
                  let checkEmail = this.validEmail(this.state.form.email);
                  if (checkEmail) {
                    this.setState({ checkEmail: true });
                  } else {
                    this.setState({ checkEmail: false });
                  }
                }}
                marginForm
              />
              {this.state.checkEmail ? <Icon><Check /></Icon> : <Icon><Cancel /></Icon>}
            </div>

            <TextField
              id="multiline-static"
              multiline
              rows="4"
              label="Message"
              InputProps={{ placeholder: 'What\'s on your mind...'}}
              value={this.state.form.message}
              onChange={event => this.setState({ form: {...this.state.form, message: event.target.value}})}
              marginForm
            />
          </CardContent>
          <CardActions>
            <Button
              raised
              onClick={this.handleFormSubmit}
            >Send</Button>
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

AppSendForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppSendForm));
