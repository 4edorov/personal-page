import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { changeStateApp } from '../../actions';
import { article01 } from './articlesData/article01';

const styleSheet = theme => ({
  articlesContent: {
    '@media (min-width: 1280px)': {
      width: 'calc(100% - 290px)',
      left: 290,
    },
    position: 'relative',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'monospace',
    margin: 50,
    height: '100vh',
  },
  blockquote: {
    color: '#666',
    margin: 0,
    paddingLeft: '3em',
    borderLeft: '0.5em #eee solid',
}
});

const mapDispatchToProps = dispatch => ({
  changeStateApp(shouldState) {
    dispatch(changeStateApp(shouldState))
  }
});

// const DefaultCodeRenderer = ReactMarkdown.renderers.code;

// const CodeRenderer = props => {
//   return <div className="bg-black-10 br2 pa2"><DefaultCodeRenderer {...props} /></div>
// }

const BlockQuoteRenderer = props => {
  return <blockquote>{props.children}</blockquote>
}


class AppArticlesComponent extends React.Component {
  componentDidMount () {
    this.props.changeStateApp('Articles');
  }

  render () {
    const {classes} = this.props
    return (
      <div className={classes.articlesContent}>
        <div className={classes.root}>
          <h2>Sorry, this part is under construction</h2>
          <ReactMarkdown source={article01} renderers={{blockquote: BlockQuoteRenderer}} />
        </div>
      </div>  
    );
  }
}

AppArticlesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  changeStateApp: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(withStyles(styleSheet)(AppArticlesComponent));
