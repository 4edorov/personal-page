import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import AppSendForm from './AppSendForm'
import { toggleSendDrawer } from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  isSendDrawerOpen: state.isSendDrawerOpen
})

const mapDispatchToProps = dispatch => ({
  toggleSendDrawer (mode) {
    dispatch(toggleSendDrawer(mode))
  }
})

class AppDrawerSendForm extends React.Component {
  render () {
    return (
      <div>
        <Drawer
          anchor='right'
          open={this.props.isSendDrawerOpen}
        >
          <AppSendForm />
        </Drawer>
      </div>
    )
  }
}

AppDrawerSendForm.propTypes = {
  isSendDrawerOpen: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawerSendForm)
