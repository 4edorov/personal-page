import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
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
  toggleDrawer(isOpen) {
    dispatch(toggleDrawer(isOpen));
  },
  stateDrawer(drawerType) {
    dispatch(stateDrawer(drawerType));
  },
});

class Root extends React.Component {
  updateDimension = () => {
    let drawerType = window.innerWidth < 1280 ? 'temporary' : 'permanent';
    let isOpen = drawerType === 'permanent' ? true : false
    this.props.toggleDrawer(isOpen);
    this.props.stateDrawer(drawerType);
  }
  componentDidMount() {
    this.updateDimension();
    window.addEventListener("resize", this.updateDimension);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimension);
  }
  render () {
    return (
      <Router>
        <div>
          <AppBarComponent />
          <AppDrawerComponent />
          {this.props.stateApp === STATE_APP[4] && <AppButtonComponent />}
          <Route exact path='/' component={AppContentComponent} />
          <Route path='/articles' render={() => <div>Articles</div>} />
          <AppDrawerSendForm />
        </div>
      </Router>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
