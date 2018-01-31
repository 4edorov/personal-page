import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  gitHubStat: state.gitHubStat,
});

const styles = {
  panel: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
  },
  avatar: {
    fontSize: 12, 
  },
  element: {
    margin: '0px 5px 5px 0px',
  },
};

class AppDrawerGitHubStat extends React.Component {
  render() {
    const {classes} = this.props;
    const gitHubStat = this.props.gitHubStat;
    return (
      <div className={classes.panel}>
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
    );
  }
};

export default connect(mapStateToProps)(withStyles(styles)(AppDrawerGitHubStat));
