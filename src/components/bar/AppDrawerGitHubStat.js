import React from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';


const styles = {
  panel: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  element: {
    margin: '5px 5px 0px 0px',
  },
};

class AppDrawerGitHubStat extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.panel}>
        <Chip
          className={classes.element}
          avatar={<Avatar>996</Avatar>}
          label={'contributions'}
        />
        <Chip
          avatar={<Avatar>996</Avatar>}
          label={'repositories'}
        />
        <Chip
          avatar={<Avatar>996</Avatar>}
          label={'stars'}
        />
        <Chip
          avatar={<Avatar>996</Avatar>}
          label={'pull requests'}
        />
        <Chip
          avatar={<Avatar>996</Avatar>}
          label={'issues'}
        />
      </div>
    );
  }
};

export default withStyles(styles)(AppDrawerGitHubStat);