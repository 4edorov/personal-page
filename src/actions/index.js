export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const STATE_DRAWER = 'STATE_DRAWER';
export const STATE_APP = 'STATE_APP';
export const TOGGLE_SEND_DRAWER = 'TOGGLE_SEND_DRAWER';

export const toggleDrawer = (open) => {
  return {
    type: TOGGLE_DRAWER,
    open
  };
};

export const stateDrawer = (docked) => {
  return {
    type: STATE_DRAWER,
    docked
  };
};

export const changeStateApp = (stateApp) => {
  return {
    type: STATE_APP,
    stateApp
  };
};

export const toggleSendDrawer = (open) => {
  return {
    type: TOGGLE_SEND_DRAWER,
    open
  };
};
