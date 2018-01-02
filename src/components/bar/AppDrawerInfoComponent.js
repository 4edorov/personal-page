import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { changeStateApp, toggleSendDrawer } from '../../actions';
import Avatar from 'material-ui/Avatar';
import weberPhoto from '../../assets/static/images/Avatar.jpg';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Face from 'material-ui-icons/Face';
import Email from 'material-ui-icons/Email';
import LightbulbOutline from 'material-ui-icons/LightbulbOutline';
import ArtTrack from 'material-ui-icons/ArtTrack';
import Business from 'material-ui-icons/Business';
import Directions from 'material-ui-icons/Directions';
import Contacts from 'material-ui-icons/Contacts';
import { STATE_APP, COLOR_APP } from '../../config/AppConfig';
import { GraphQLClient } from 'graphql-request';
import { GIT_HUB_GRAPHQL_AUTH_KEY } from '../../config/AppKeysConfig';

const endpoint = 'https://api.github.com/graphql';
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `bearer ${GIT_HUB_GRAPHQL_AUTH_KEY}`,
  }
});
const query = `
  {
    user(login: "4edorov") {
      location
    }
  }
`;

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
  navLink: {
    textDecoration: 'none',
  },
  activeBtn: {
    background: COLOR_APP.primary[500],
  },
});

const icons = [
  <LightbulbOutline />,
  <ArtTrack />,
  <Business />,
  <Directions />,
  <Contacts />,
];

class AppDrawerInfoComponent extends React.Component {
  componentDidMount() {
    client.request(query).then(result => {
      console.log('result', result);
    });
  }

  handleAppState = mode => {
    this.props.changeStateApp(mode);
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
          alt="Alexander Fedorov"
          src={weberPhoto}
          className={classes.avatar}
        />
        <div className={classes.list}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Face />
              </ListItemIcon>
              <ListItemText primary="Alexander Fedorov" secondary="Web Developer" />
            </ListItem>
            <ListItem button={true} onClick={() => this.handleSendForm(!this.props.isSendDrawerOpen)}>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary="4edorov@gmail.com" />
            </ListItem>
          </List>
          <Divider />
          {STATE_APP.map((list, index) => {
            let activeStateApp = list === this.props.stateApp ? classes.activeBtn : '';
            return (
              <a href={`#${list.replace(' ', '-').toLowerCase()}`} key={index} className={classes.navLink}>
                <List >
                  <ListItem button={true} className={activeStateApp} onClick={() => this.handleAppState(list)}>
                    <ListItemIcon>
                      {icons[index]}
                    </ListItemIcon>
                    <ListItemText primary={list} />
                  </ListItem>
                </List>
              </a>
            );
          })}
          <Divider />
        </div>
      </div>
    );
  }
}

AppDrawerInfoComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppDrawerInfoComponent));
