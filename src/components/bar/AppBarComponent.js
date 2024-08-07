import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleDrawer } from '../../actions'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import { URL_GIT_HUB, URL_FACEBOOK } from '../../config/AppConfig'

const styleSheet = theme => ({
  appBar: {
    '@media (min-width: 1280px)': {
      width: 'calc(100% - 290px)',
      left: 290
    }
  },
  barToolIcons: {
    display: 'flex',
    flexBasis: '100%',
    justifyContent: 'flex-end'
  },
  flex: {
    marginLeft: 20,
    flexBasis: '100%'
  }
})

const mapStateToProps = state => ({
  isMainDrawerOpen: state.isMainDrawerOpen,
  stateApp: state.stateApp,
  mainDrawerType: state.mainDrawerType
})
const mapDispatchToProps = dispatch => ({
  toggleDrawer (mode) {
    dispatch(toggleDrawer(mode))
  }
})

const AppBarComponent = props => {
  const classes = props.classes

  const handleDrawerOpen = () => {
    props.toggleDrawer(!props.isMainDrawerOpen)
  }

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        {
          props.mainDrawerType === 'temporary' &&
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
        }
        <Typography type='title' className={classes.flex}>
          {props.stateApp}
        </Typography>
        <div className={classes.barToolIcons}>
          <IconButton href={URL_GIT_HUB}>
            <Icon className='fab fa-github' />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  stateApp: PropTypes.string.isRequired,
  mainDrawerType: PropTypes.string,
  isMainDrawerOpen: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppBarComponent))
