import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Scroll from 'react-scroll';
import { withStyles } from '@material-ui/core/styles';
import { changeStateApp, toggleSendDrawer, updateGitHubStat } from '../../actions';
import Avatar from '@material-ui/core/Avatar';
import weberPhoto from '../../assets/static/images/Avatar.jpg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Face from '@material-ui/icons/Face';
import Email from '@material-ui/icons/Email';
import LightbulbOutline from '@material-ui/icons/LightbulbOutline';
import ArtTrack from '@material-ui/icons/ArtTrack';
import Business from '@material-ui/icons/Business';
import Directions from '@material-ui/icons/Directions';
import Contacts from '@material-ui/icons/Contacts';
import { STATE_APP, COLOR_APP, GIT_HUB_QUERY } from '../../config/AppConfig';
import { GIT_HUB_REQUEST_URL } from '../../config/AppKeysConfig';
import AppDrawerGitHubStat from './AppDrawerGitHubStat';

const mapStateToProps = state => ({
  stateApp: state.stateApp,
  isSendDrawerOpen: state.isSendDrawerOpen,
});

const mapDispatchToProps = dispatch => ({
  changeStateApp(mode) {
    dispatch(changeStateApp(mode));
  },
  toggleSendDrawer(mode) {
    dispatch(toggleSendDrawer(mode));
  },
  updateGitHubStat(data) {
    dispatch(updateGitHubStat(data));
  },
});

const styleSheet = theme => ({
  avatar: {
    width: 250,
    height: 250,
    margin: 20,
  },
  list: {
    width: '100%',
    background: theme.palette.background.paper,
  },
  begin: {
    marginTop: 64,
  },
  activeBtn: {
    background: COLOR_APP.primary[500],
  },
  infoPanel: {
    maxWidth: 290,
  }
});

const icons = [
  <LightbulbOutline key={1} />,
  <ArtTrack key={2} />,
  <Business key={3} />,
  <Directions key={4} />,
  <Contacts key={5} />,
];

const formGitHubStat = object => {
  return {
    contributions: '-',
    repositories: object.viewer.repositories.totalCount || '-',
    stars: object.viewer.starredRepositories.totalCount || '-',
    'pull requests': object.viewer.pullRequests.totalCount || '-',
    'issue comments': object.viewer.issueComments.totalCount || '-',
  };
};

const scroller = Scroll.scroller;

class AppDrawerInfoComponent extends React.Component {
  componentDidMount() {
    const requestInit = {
      method: 'POST',
      body: GIT_HUB_QUERY
    };
    fetch(GIT_HUB_REQUEST_URL, requestInit)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(result => {
        const gitHubStat = formGitHubStat(result.result);
        this.props.updateGitHubStat(gitHubStat);
      })
      .catch(error => {
        console.error('webtask error:', error);
        return;
      });
  }

  handleAppState = mode => {
    const elementName = mode.replace(' ', '').toLowerCase() + 'Element';
    
    scroller.scrollTo(elementName, {
      duration: 1500,
      delay: 50,
      smooth: true,
    })

    setTimeout(() => {
      this.props.changeStateApp(mode);
    }, 1500);
  }

  handleSendForm = mode => {
    this.props.toggleSendDrawer(mode);
  }

  render() {
    const classes = this.props.classes;

    return (
      <div>
        <div className={classes.begin}>
          <Divider />
        </div>
        <Avatar
          alt='Alexander Fedorov'
          src={weberPhoto}
          className={classes.avatar}
        />
        <div className={classes.list}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Face />
              </ListItemIcon>
              <ListItemText primary='Alexander Fedorov' secondary='Web Developer' />
            </ListItem>
            <ListItem button={true} onClick={() => this.handleSendForm(!this.props.isSendDrawerOpen)}>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary='4edorov@gmail.com' />
            </ListItem>
          </List>
          <Divider />
          {STATE_APP.map((list, index) => {
            let activeStateApp = list === this.props.stateApp ? classes.activeBtn : '';
            return (
              <List key={index}>
                <ListItem button={true} className={activeStateApp} onClick={() => this.handleAppState(list)}>
                  <ListItemIcon>
                    {icons[index]}
                  </ListItemIcon>
                  <ListItemText primary={list} />
                </ListItem>
              </List>
            );
          })}
          <Divider />
          <div className={classes.infoPanel}>
            <AppDrawerGitHubStat />
          </div>
        </div>
      </div>
    );
  }
}

AppDrawerInfoComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  updateGitHubStat: PropTypes.func.isRequired,
  changeStateApp: PropTypes.func.isRequired,
  toggleSendDrawer: PropTypes.func.isRequired,
  isSendDrawerOpen: PropTypes.bool.isRequired,
  stateApp: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppDrawerInfoComponent));
