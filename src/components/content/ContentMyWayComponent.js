import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import MyWayProgrammsComponent from './lists/MyWayProgrammsComponent';
import MyWayBooksComponent from './lists/MyWayBooksComponent';
import MyWayArticlesComponent from './lists/MyWayArticlesComponent';
import MyWayVideosComponent from './lists/MyWayVideosComponent';
import MyWayLanguagesComponent from './lists/MyWayLanguagesComponent';
import MyWayFrameworksComponent from './lists/MyWayFrameworksComponent';
import MyWayToolsComponent from './lists/MyWayToolsComponent';
import MyWayDataComponent from './lists/MyWayDataComponent';
import MyWayDesignComponent from './lists/MyWayDesignComponent';
import MyWayCertificatesComponent from './lists/MyWayCertificatesComponent';

const directions = [
  {label: 'Learning Programs', content: <MyWayProgrammsComponent />,},
  {label: 'Books', content: <MyWayBooksComponent />,},
  {label: 'Articles / Recources', content: <MyWayArticlesComponent />,},
  {label: 'Videos / Channels', content: <MyWayVideosComponent />,},
];

const technologies = [
  {label: 'Languages', content: <MyWayLanguagesComponent />,},
  {label: 'Frameworks', content: <MyWayFrameworksComponent />,},
  {label: 'Tools', content: <MyWayToolsComponent />,},
  {label: 'Data', content: <MyWayDataComponent />,},
  {label: 'Design', content: <MyWayDesignComponent />,},
  {label: 'My Certificates', content: <MyWayCertificatesComponent />,},
];

const styleSheet = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'monospace',
    magrin: 50,
  },
  main: {
    width: 'calc(100% - 50px)',
    margin: 50,
  },
  caption: {
    marginTop: 128,
    marginBottom: 50,
  },
  appBar: {
    backgroundColor: theme.palette.primary[500],
    position: 'static',
  },
});

class ContentMyWayComponent extends React.Component {
  state = {
    indexTechnologies: 0,
    indexDirections: 0,
  };

  handleChangeTechnologies = (event, indexTechnologies) => {
    this.setState({ indexTechnologies });
  };

  handleChangeDirections = (event, indexDirections) => {
    this.setState({ indexDirections });
  };

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <div className={classes.caption}>
          <h1>My Way</h1>
        </div>
        <Paper className={classes.main}>
          <AppBar className={classes.appBar}>
            <Tabs
              value={this.state.indexTechnologies}
              onChange={this.handleChangeTechnologies}
              variant='scrollable'
              scrollButtons="on"
            >
              {technologies.map((one, index) =>
                <Tab label={one.label} key={index} />
              )}
            </Tabs>
          </AppBar>
          {technologies[this.state.indexTechnologies].content}
        </Paper>
        <Paper className={classes.main}>
          <AppBar className={classes.appBar}>
            <Tabs
              value={this.state.indexDirections}
              onChange={this.handleChangeDirections}
              variant='scrollable'
              scrollButtons="on"
            >
              {directions.map((one, index) =>
                <Tab label={one.label} key={index} />
              )}
            </Tabs>
          </AppBar>
          {directions[this.state.indexDirections].content}
        </Paper>
      </div>
    );
  }
}

ContentMyWayComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ContentMyWayComponent);
