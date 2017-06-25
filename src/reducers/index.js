import { TOGGLE_DRAWER, STATE_DRAWER, STATE_APP } from '../actions/index';


const initialState = {
  openDrawer: false,
  dockedDrawer: true,
  stateApp: 'Greeting',
};

const toggleDrawer = function(state = initialState, action) {
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
    default:
      return state;
  }
}

export default toggleDrawer;
