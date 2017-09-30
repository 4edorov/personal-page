import React from 'react';
import Drawer from 'material-ui/Drawer';
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

  render() {
    return (
      <div>
        <Drawer
          open={this.props.isMainDrawerOpen}
          type={this.props.mainDrawerType}
          onClick={this.handleDrawerClose}
        >
          <AppDrawerInfoComponent />
        </Drawer>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawerComponent);
