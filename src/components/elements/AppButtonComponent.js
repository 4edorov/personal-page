import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Chat from 'material-ui-icons/Chat';
import { connect } from 'react-redux';
import { toggleSendDrawer } from '../../actions';


const styleSheet = createStyleSheet('AppButtonComponent', theme => ({
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
}));

const mapStateToProps = (state) => ({
  open: state.openSendDrawer,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSendDrawer(mode) {
    dispatch(toggleSendDrawer(mode));
  },
});

class AppButtonComponent extends Component {
  classes = this.props.classes;
  handleDrawerClose = () => {
    this.props.toggleSendDrawer(!this.props.open)
  }

  render() {
    return (
      <Button
        fab={true}
        color={"accent"}
        className={this.classes.appButton}
        onClick={this.handleDrawerClose}
      >
        <Chat />
      </Button>
    );
  }
};

AppButtonComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppButtonComponent));