import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppDrawerInfoComponent from './AppDrawerInfoComponent';
import { toggleDrawer } from '../../actions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  open: state.openDrawer,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer(mode) {
    dispatch(toggleDrawer(mode));
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
          open={this.props.open}
          docked={this.props.docked}
          onClick={this.handleDrawerClose}
        >
          <AppDrawerInfoComponent />
        </Drawer>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawerComponent);
