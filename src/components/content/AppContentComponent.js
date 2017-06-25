import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import ContentGreetingComponent from './ContentGreetingComponent';
import ContentAboutComponent from './ContentAboutComponent';
import ContentPortfolioComponent from './ContentPortfolioComponent';
import ContentMyWayComponent from './ContentMyWayComponent';
import ContentContactsComponent from './ContentContactsComponent';
import { changeStateApp } from '../../actions';
import { STATE_APP } from '../../config/AppConfig';
import Divider from 'material-ui/Divider';


const styleSheet = createStyleSheet('AppContentComponent', {
  appContent: {
    '@media (min-width: 1280px)': {
      width: 'calc(100% - 290px)',
      left: 290,
    },
    position: 'relative',
  },
});

const mapStateToProps = (state) => ({
  stateApp: state.stateApp
});

const mapDispatchToProps = (dispatch) => ({
  changeStateApp(mode) {
    dispatch(changeStateApp(mode));
  },
});

class AppContentComponent extends Component {
  listenEventScroll = (event) => {
    let greetingTop = event.target.all['greeting'].getBoundingClientRect().top;
    let aboutTop = event.target.all['about-me'].getBoundingClientRect().top;
    let portfolioTop = event.target.all['portfolio'].getBoundingClientRect().top;
    let wayTop = event.target.all['my-way'].getBoundingClientRect().top;
    let contactsTop = event.target.all['contacts'].getBoundingClientRect().top;

    if (greetingTop <= 0) {
      this.props.changeStateApp(STATE_APP[0]);
    }
    if (aboutTop <= 0) {
      this.props.changeStateApp(STATE_APP[1]);
    }
    if (portfolioTop <=0) {
      this.props.changeStateApp(STATE_APP[2]);
    }
    if (wayTop <= 0) {
      this.props.changeStateApp(STATE_APP[3]);
    }
    if (contactsTop <= 0) {
      this.props.changeStateApp(STATE_APP[4]);
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenEventScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenEventScroll);
  }

  render () {
    return (
      <div className={this.props.classes.appContent} ref="content">
        <ContentGreetingComponent />
        <Divider />
        <ContentAboutComponent />
        <Divider />
        <ContentPortfolioComponent />
        <Divider />
        <ContentMyWayComponent />
        <Divider />
        <ContentContactsComponent />
      </div>
    );
  }
}

AppContentComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppContentComponent));
