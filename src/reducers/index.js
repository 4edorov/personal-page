import {
  TOGGLE_DRAWER,
  STATE_DRAWER,
  STATE_APP,
  TOGGLE_SEND_DRAWER,
  GET_GIT_HUB_STAT
} from '../actions/index'

const initialState = {
  isMainDrawerOpen: false,
  mainDrawerType: 'persistent',
  isSendDrawerOpen: false,
  stateApp: 'Greeting',
  gitHubStat: {}
}

const toggleAppState = function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        isMainDrawerOpen: action.open
      })
    case STATE_DRAWER:
      return Object.assign({}, state, {
        mainDrawerType: action.docked
      })
    case STATE_APP:
      return Object.assign({}, state, {
        stateApp: action.stateApp
      })
    case TOGGLE_SEND_DRAWER:
      return Object.assign({}, state, {
        isSendDrawerOpen: action.open
      })
    case GET_GIT_HUB_STAT:
      return Object.assign({}, state, {
        gitHubStat: action.stat
      })
    default:
      return state
  }
}

export default toggleAppState
