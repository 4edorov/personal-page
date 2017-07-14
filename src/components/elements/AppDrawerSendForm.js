import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppSendForm from './AppSendForm';
import { toggleSendDrawer } from '../../actions';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  open: state.openSendDrawer,
})

const mapDispatchToProps = (dispatch) => ({
  toggleSendDrawer(mode) {
    dispatch(toggleSendDrawer(mode));
  },
});

class AppDrawerSendForm extends Component {
  handleDrawerClose = () => {
    this.props.toggleSendDrawer(false);
  }

  render() {
    return (
      <div>
        <Drawer>
          <AppSendForm />
        </Drawer>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawerSendForm);
