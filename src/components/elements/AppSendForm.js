import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { connect } from 'react-redux';
import { toggleSendDrawer } from '../../actions';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Close from 'material-ui-icons/Close';
import Cancel from 'material-ui-icons/Cancel';
import Check from 'material-ui-icons/Check';
import Send from 'material-ui-icons/Send';
import { URL_FOR_SEND_EMAIL_FORM } from '../../config/AppConfig';


const styleSheet = createStyleSheet('AppSendForm', theme => ({
  container: {
    width: 300,
    margin: 'auto',
  },
  inputForms: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sendIcon: {
    marginLeft: 10,
  },
  textThank: {
    color: theme.palette.accent[500],
  },
}));

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
    thankMessage: false,
  };
  handleDrawerClose() {
    this.props.toggleSendDrawer(false);
  };
  validEmail(email) {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  getFormData(messageFields) {
    let validateMessageFields = {};
    Object.keys(messageFields).forEach(field => {
      if (messageFields[field].length > 0) {
        validateMessageFields[field] = messageFields[field];
      }
    });
    return validateMessageFields;
  };
  handleFormSubmit() {
    const data = this.getFormData(this.state.form);
    let url = URL_FOR_SEND_EMAIL_FORM;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(JSON.stringify(data));
    this.setState({thankMessage: true});
    setTimeout(() => {
      this.handleDrawerClose()
    }, 4000);
  };

  renderThankMessage() {
    const classes = this.props.classes;
    return (
      <Card>
        <CardContent>
          <Typography align="center" type="headline">
            Thank you,<br /><br />
            <span className={classes.textThank}>Dear {this.state.form.name},</span><br />
            for contacting me!<br /><br />
            I will get back to you soon!
          </Typography>
        </CardContent>
      </Card>
    );
  };

  renderSendForm() {
    const classes = this.props.classes;
    return (
      <Card>
        <CardHeader
          title={
            <div className={classes.titleHeader}>
              <span>Contact Form</span>
              <IconButton onClick={() => {this.handleDrawerClose()}}><Close /></IconButton>
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
            margin="normal"
          />
          <div>
            <TextField
              id="email"
              label="Email"
              InputProps={{ placeholder: 'your.name@name.com'}}
              value={this.state.form.email}
              onChange={event => {
                let checkEmail = (email) => {
                  let isEmailValid = this.validEmail(email);
                  isEmailValid ? this.setState({ checkEmail: true }) : this.setState({ checkEmail: false });
                };
                this.setState({ form: {...this.state.form, email: event.target.value}}, checkEmail(event.target.value));
              }}
              margin="normal"
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
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button
            raised
            color="primary"
            onClick={() => {this.handleFormSubmit()}}
            disabled={this.state.form.name && this.state.form.email && this.state.form.message ? false : true}
          >
            Send
            <Send className={classes.sendIcon}/>
          </Button>
        </CardActions>
      </Card>
    );
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.container}>
        {this.state.thankMessage ? this.renderThankMessage() : this.renderSendForm()}
      </div>
    )
  };
};

AppSendForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppSendForm));
