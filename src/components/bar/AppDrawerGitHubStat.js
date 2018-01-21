import React from 'react';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';


class AppDrawerGitHubStat extends React.Component {
  onHandleClick = event => {
    event.stopPropagation();
  }
  render() {
    return (
      <div>
        <ExpansionPanel onClick={this.onHandleClick}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
              GitHub stat
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Chip
              avatar={<Avatar>996</Avatar>}
              label={'contributions'}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
};

export default AppDrawerGitHubStat;