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
  }

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

AppSendForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppSendForm));
