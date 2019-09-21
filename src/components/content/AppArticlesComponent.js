import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { changeStateApp } from '../../actions'

const styleSheet = theme => ({
  articlesContent: {
    '@media (min-width: 1280px)': {
      width: 'calc(100% - 290px)',
      left: 290
    },
    position: 'relative'
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'monospace',
    margin: 50,
    height: '100vh'
  }
})

const mapDispatchToProps = dispatch => ({
  changeStateApp (shouldState) {
    dispatch(changeStateApp(shouldState))
  }
})

class AppArticlesComponent extends React.Component {
  componentDidMount () {
    this.props.changeStateApp('Articles')
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.articlesContent}>
        <div className={classes.root}>
          <h2>Sorry, this part is under construction</h2>
        </div>
      </div>
    )
  }
}

AppArticlesComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  changeStateApp: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(withStyles(styleSheet)(AppArticlesComponent))
