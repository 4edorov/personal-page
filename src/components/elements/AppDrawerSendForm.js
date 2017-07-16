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
  render() {
    return (
      <div>
        <Drawer
          anchor="right"
          open={this.props.open}
        >
          <AppSendForm />
        </Drawer>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawerSendForm);
