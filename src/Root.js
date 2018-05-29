import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBarComponent from './components/bar/AppBarComponent';
import AppDrawerComponent from './components/bar/AppDrawerComponent';
import { toggleDrawer, stateDrawer } from './actions';
import AppButtonComponent from './components/elements/AppButtonComponent';
import AppContentComponent from './components/content/AppContentComponent';
import { STATE_APP } from './config/AppConfig';
import AppDrawerSendForm from './components/elements/AppDrawerSendForm';

const mapStateToProps = state => ({
  isMainDrawerOpen: state.isMainDrawerOpen,
  mainDrawerType: state.mainDrawerType,
  stateApp: state.stateApp,
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer (isOpen) {
    dispatch(toggleDrawer(isOpen));
  },
  stateDrawer (drawerType) {
    dispatch(stateDrawer(drawerType));
  },
});

class Root extends React.Component {
  updateDimension = () => {
    let drawerType = window.innerWidth < 1280 ? 'temporary' : 'permanent';
    let isOpen = drawerType === 'permanent'
    this.props.toggleDrawer(isOpen);
    this.props.stateDrawer(drawerType);
  }

  componentDidMount () {
    this.updateDimension();
    window.addEventListener('resize', this.updateDimension);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimension);
  }

  render () {
    return (
      <div>
        <AppBarComponent />
        <AppDrawerComponent />
        {this.props.stateApp === STATE_APP[4] && <AppButtonComponent />}
        <AppContentComponent />
        <AppDrawerSendForm />
      </div>
    );
  }
}

Root.propTypes = {
  stateApp: PropTypes.string,
  toggleDrawer: PropTypes.func,
  stateDrawer: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
