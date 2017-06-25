import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import toggleDrawer from './reducers';
import './App.css';
import Root from './Root';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


let store = createStore(toggleDrawer);

function App () {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
