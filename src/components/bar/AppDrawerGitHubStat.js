import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { URL_GIT_HUB } from '../../config/AppConfig';

const mapStateToProps = state => ({
  gitHubStat: state.gitHubStat,
});

const styles = theme => ({
  panel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
  },
  avatar: {
    fontSize: 12,
    backgroundColor: theme.palette.secondary['500'],
  },
  element: {
    margin: '0px 5px 5px 0px',
    backgroundColor: theme.palette.primary['500'],
    color: theme.palette.text.primary,
  },
});

class AppDrawerGitHubStat extends React.Component {
  render () {
    const {classes, gitHubStat} = this.props;

    return (
      <div className={classes.panel}>
        <div className={classes.chips}>
          {
            Object.keys(gitHubStat).map((key, index) => {
              return (
                <Chip
                  className={classes.element}
                  avatar={<Avatar className={classes.avatar}>{`${gitHubStat[key]}`}</Avatar>}
                  label={`${key}`}
                  key={index}
                />
              );
            })
          }
        </div>
        <IconButton href={URL_GIT_HUB}>
          <Icon className="fab fa-github" />
        </IconButton>
      </div>
    );
  }
}

AppDrawerGitHubStat.propTypes = {
  classes: PropTypes.object.isRequired,
  gitHubStat: PropTypes.object,
};

export default connect(mapStateToProps)(withStyles(styles)(AppDrawerGitHubStat));
