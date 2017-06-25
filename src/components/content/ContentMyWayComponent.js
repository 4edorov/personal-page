import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import MyWayProgrammsComponent from './lists/MyWayProgrammsComponent';
import MyWayBooksComponent from './lists/MyWayBooksComponent';
import MyWayArticlesComponent from './lists/MyWayArticlesComponent';


const directions = [
  {
    label: 'Learning Programms',
    content: <MyWayProgrammsComponent />,
  },
  {
    label: 'Books',
    content: MyWayBooksComponent,
  },
  {
    label: 'Articles',
    content: MyWayArticlesComponent,
  },
];

const styleSheet = createStyleSheet('ContentMyWayComponent', theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'monospace',
    magrin: 50,
  },
  main: {
    width: 'calc(100% - 100px)',
    margin: 50,
  },
  caption: {
    marginBottom: 50,
  },
  appBar: {
    backgroundColor: theme.palette.primary[500],
  },
}));

class ContentMyWayComponent extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  render() {
    const classes = this.props.classes;

    return (
      <div id="my-way" className={classes.root}>
        <div className={classes.caption}>
          <h1>My Way</h1>
        </div>
        <Paper className={classes.main}>
          <div className={classes.appBar}>
            <Tabs
              index={this.state.index}
              onChange={this.handleChange}
              scrollable
              scrollButtons="auto"
            >
              {directions.map((one, index) =>
                <Tab label={one.label} key={index} />
              )}
            </Tabs>
          </div>
          {directions[this.state.index].content}
        </Paper>
      </div>
    );
  }
}

ContentMyWayComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ContentMyWayComponent);
