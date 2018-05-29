import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import AppDrawerInfoComponent from './AppDrawerInfoComponent';
import { toggleDrawer } from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isMainDrawerOpen: state.isMainDrawerOpen,
  mainDrawerType: state.mainDrawerType,
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer(isOpen) {
    dispatch(toggleDrawer(isOpen));
  },
});

class AppDrawerComponent extends React.Component {
  handleDrawerClose = () => {
    this.props.toggleDrawer(false);
  }

  render () {
    return (
      <div>
        <Drawer
          open={this.props.isMainDrawerOpen}
          variant={this.props.mainDrawerType}
          onClick={this.handleDrawerClose}
        >
          <AppDrawerInfoComponent />
        </Drawer>
      </div>
    );
  }
}

AppDrawerComponent.propTypes = {
  isMainDrawerOpen: PropTypes.bool.isRequired,
  mainDrawerType: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawerComponent);
