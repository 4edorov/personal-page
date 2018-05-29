import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chat from '@material-ui/icons/Chat';
import { connect } from 'react-redux';
import { toggleSendDrawer } from '../../actions';

const styleSheet = theme => ({
  appButton: {
    position: 'fixed',
    right: 40,
    bottom: 40,
    zIndex: 1000,
  },
  mailTo: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  },
});

const mapStateToProps = state => ({
  isSendDrawerOpen: state.isSendDrawerOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleSendDrawer(mode) {
    dispatch(toggleSendDrawer(mode));
  },
});

class AppButtonComponent extends Component {
  classes = this.props.classes;
  handleDrawerClose = () => {
    this.props.toggleSendDrawer(!this.props.isSendDrawerOpen)
  }

  render() {
    return (
      <Button
        variant='fab'
        color='secondary'
        className={this.classes.appButton}
        onClick={this.handleDrawerClose}
      >
        <Chat />
      </Button>
    );
  }
}

AppButtonComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleSendDrawer: PropTypes.func.isRequired,
  isSendDrawerOpen: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppButtonComponent));
