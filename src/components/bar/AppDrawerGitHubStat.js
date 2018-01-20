import React from 'react';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';


class AppDrawerGitHubStat extends React.Component {
  render() {
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary>
            GitHub stat
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            statistics
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
};

export default AppDrawerGitHubStat;