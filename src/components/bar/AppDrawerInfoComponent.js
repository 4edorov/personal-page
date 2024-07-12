import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Scroll from 'react-scroll'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { changeStateApp, toggleSendDrawer, updateGitHubStat } from '../../actions'
import Avatar from '@material-ui/core/Avatar'
import weberPhoto from '../../assets/static/images/Avatar.jpg'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Face from '@material-ui/icons/Face'
import Email from '@material-ui/icons/Email'
import AssignmentInd from '@material-ui/icons/AssignmentInd'
import WbIncandescent from '@material-ui/icons/WbIncandescent'
import ArtTrack from '@material-ui/icons/ArtTrack'
import Business from '@material-ui/icons/Business'
import Directions from '@material-ui/icons/Directions'
import Contacts from '@material-ui/icons/Contacts'
import Book from '@material-ui/icons/Book'
import Backspace from '@material-ui/icons/Backspace'
import { STATE_APP, COLOR_APP, GIT_HUB_QUERY } from '../../config/AppConfig'
import AppDrawerGitHubStat from './AppDrawerGitHubStat'

const mapStateToProps = state => ({
  stateApp: state.stateApp,
  isSendDrawerOpen: state.isSendDrawerOpen
})

const mapDispatchToProps = dispatch => ({
  changeStateApp (mode) {
    dispatch(changeStateApp(mode))
  },
  toggleSendDrawer (mode) {
    dispatch(toggleSendDrawer(mode))
  },
  updateGitHubStat (data) {
    dispatch(updateGitHubStat(data))
  }
})

const styleSheet = theme => ({
  avatar: {
    width: 250,
    height: 250,
    margin: 20
  },
  list: {
    width: '100%',
    background: theme.palette.background.paper
  },
  begin: {
    marginTop: 64
  },
  activeBtn: {
    background: COLOR_APP.primary[500]
  },
  infoPanel: {
    maxWidth: 290
  },
  noLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
})

const icons = [
  <WbIncandescent key={0} />,
  <ArtTrack key={1} />,
  <Business key={2} />,
  <Directions key={3} />,
  <Contacts key={4} />,
  <Book key={5} />,
  <Backspace key={6} />
]

const formGitHubStat = object => {
  return {
    contributions: '-',
    repositories: object.viewer.repositories.totalCount || '-',
    stars: object.viewer.starredRepositories.totalCount || '-',
    'pull requests': object.viewer.pullRequests.totalCount || '-',
    'issue comments': object.viewer.issueComments.totalCount || '-'
  }
}

const scroller = Scroll.scroller

class AppDrawerInfoComponent extends React.Component {
  componentDidMount () {
    const requestInit = {
      method: 'POST',
      body: GIT_HUB_QUERY
    }
    window.fetch('', requestInit)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(result => {
        const gitHubStat = formGitHubStat(result.result)
        this.props.updateGitHubStat(gitHubStat)
      })
      .catch(error => {
        console.error('webtask error:', error)
      })
  }

  handleAppState = mode => {
    if (mode === 'Articles' || mode === 'Back') {
      mode = mode === 'Back' ? 'Greeting' : mode
      this.props.changeStateApp(mode)
      return
    }

    const elementName = mode.replace(' ', '').toLowerCase() + 'Element'

    scroller.scrollTo(elementName, {
      duration: 1500,
      delay: 50,
      smooth: true
    })

    setTimeout(() => {
      this.props.changeStateApp(mode)
    }, 1500)
  }

  handleSendForm = mode => {
    this.props.toggleSendDrawer(mode)
  }

  render () {
    const { classes, stateApp } = this.props

    let appLinks = STATE_APP
    if (stateApp === 'Articles') {
      appLinks = ['Back', 'Articles']
    }

    return (
      <div>
        <div className={classes.begin}>
          <Divider />
        </div>
        <Avatar
          alt='Alexander Fedorov'
          src={weberPhoto}
          className={classes.avatar}
        />
        <div className={classes.list}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Face />
              </ListItemIcon>
              <ListItemText primary='Alexander Fedorov' secondary='Software Engineer' />
            </ListItem>
            <ListItem button onClick={() => this.handleSendForm(!this.props.isSendDrawerOpen)}>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary='4edorov@gmail.com' />
            </ListItem>
            <a
              href="/resume.pdf"
              download="CV_2024-07-12_Alexander_Fedorov"
              target="_blank"
              rel="noreferrer"
              className={classes.noLink}
            >
              <ListItem button>
                <ListItemIcon>
                  <AssignmentInd />
                </ListItemIcon>
                <ListItemText primary='Resume' secondary='Download' />
              </ListItem>
            </a>
          </List>
          <Divider />
          {appLinks.map((list, index) => {
            const activeStateApp = list === stateApp ? classes.activeBtn : ''
            if (list === 'Back') {
              index = 6
            }
            const LinkItem = React.forwardRef((props, ref) => <Link to={list === 'Articles' ? '/articles' : '/'} {...props} ref={ref} />)
            LinkItem.displayName = 'LinkItem'
            return (
              <List key={index}>
                <ListItem button component={LinkItem} className={activeStateApp} onClick={() => this.handleAppState(list)}>
                  <ListItemIcon>
                    {icons[index]}
                  </ListItemIcon>
                  <ListItemText primary={list} />
                </ListItem>
              </List>
            )
          })}
          <Divider />
          <div className={classes.infoPanel}>
            <AppDrawerGitHubStat />
          </div>
        </div>
      </div>
    )
  }
}

AppDrawerInfoComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  updateGitHubStat: PropTypes.func.isRequired,
  changeStateApp: PropTypes.func.isRequired,
  toggleSendDrawer: PropTypes.func.isRequired,
  isSendDrawerOpen: PropTypes.bool.isRequired,
  stateApp: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(AppDrawerInfoComponent))
