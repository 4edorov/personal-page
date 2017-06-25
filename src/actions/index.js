export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
export const STATE_DRAWER = 'STATE_DRAWER';
export const STATE_APP = 'STATE_APP';

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
