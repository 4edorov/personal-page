import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { connect } from 'react-redux';
import { toggleSendDrawer } from '../../actions';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui-icons/Close';
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
    name: '',
    email: '',
    message: '',
  };
  handleDrawerClose = () => {
    this.props.toggleSendDrawer(false);
  };

  getFormData = (elements) => {
    return elements;
  };

  handleFormSubmit = () => {
    console.log('handleSubmit');
    const data = this.getFormData(this.state);
    console.log('data', JSON.stringify(data));
    let url = URL_FOR_SEND_EMAIL_FORM;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(JSON.stringify(data));
  };

  // function handleFormSubmit(event) {  // handles form submit withtout any jquery
  //   event.preventDefault();           // we are submitting via xhr below
  //   var data = getFormData();         // get the values submitted in the form
  //   if( !validEmail(data.email) ) {   // if email is not valid show error
  //     document.getElementById('email-invalid').style.display = 'block';
  //     return false;
  //   } else {
  //     var url = event.target.action;  //
  //     var xhr = new XMLHttpRequest();
  //     xhr.open('POST', url);
  //     // xhr.withCredentials = true;
  //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  //     xhr.onreadystatechange = function() {
  //         console.log( xhr.status, xhr.statusText )
  //         console.log(xhr.responseText);
  //         document.getElementById('gform').style.display = 'none'; // hide form
  //         document.getElementById('thankyou_message').style.display = 'block';
  //         return;
  //     };
  //     // url encode form data for sending as post data
  //     var encoded = Object.keys(data).map(function(k) {
  //         return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
  //     }).join('&')
  //     xhr.send(encoded);
  //   }
  // }

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
