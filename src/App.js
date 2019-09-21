import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import toggleAppState from './reducers'
import './App.css'
import Root from './Root'

const store = createStore(toggleAppState)

function App () {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  )
}

export default App
