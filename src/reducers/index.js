import {
  TOGGLE_DRAWER,
  STATE_DRAWER,
  STATE_APP,
  TOGGLE_SEND_DRAWER
} from '../actions/index';


const initialState = {
  openDrawer: false,
  dockedDrawer: 'persistent',
  stateApp: 'Greeting',
  openSendDrawer: false,
};

const toggleAppState = function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return Object.assign({}, state, {
        openDrawer: action.open,
      });
    case STATE_DRAWER:
      return Object.assign({}, state, {
        dockedDrawer: action.docked,
      });
    case STATE_APP:
      return Object.assign({}, state, {
        stateApp: action.stateApp,
      });
    case TOGGLE_SEND_DRAWER:
      return Object.assign({}, state, {
        openSendDrawer: action.open,
      });
    default:
      return state;
  }
}

export default toggleAppState;
