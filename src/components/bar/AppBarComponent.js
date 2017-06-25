import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../actions';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { URL_GIT_HUB, URL_FACEBOOK } from '../../config/AppConfig';


const styleSheet = createStyleSheet('AppBarComponent', {
  appBar: {
    '@media (min-width: 1280px)': {
      width: 'calc(100% - 290px)',
      left: 290,
    },
  },
  barToolIcons: {
    display: 'flex',
    flexBasis: '100%',
    justifyContent: 'flex-end',
  },
  flex: {
    marginLeft: 20,
    flexBasis: '100%',
  },
});

const mapStateToProps = (state) => ({
  open: state.openDrawer,
  stateApp: state.stateApp,
});
const mapDispatchToProps = (dispatch) => ({
  toggleDrawer(mode) {
    dispatch(toggleDrawer(mode));
  },
});

const AppBarComponent = (props) => {
  const classes = props.classes;

  const handleDrawerOpen = () => {
    props.toggleDrawer(!props.open);
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        {
          props.overlay &&
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        }
        <Typography type="title" className={classes.flex}>
          {props.stateApp}
        </Typography>
        <div className={classes.barToolIcons}>
          <IconButton href={URL_GIT_HUB}>
            <Icon className="fa fa-github" />
          </IconButton>
          <IconButton href={URL_FACEBOOK}>
            <Icon className="fa fa-facebook-official" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppBarComponent));
