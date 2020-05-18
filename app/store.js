import { createStore, applyMiddleware } from 'redux'
import appReducer from './redux'
import { createLogger } from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

let middleware = [thunkMiddleware, createLogger({ collapsed: true })]

export default createStore(
  appReducer,
  // 👇 This uses the Redux DevTools extension, assuming you have it installed in your browser.
  // 👇 See: https://github.com/zalmoxisus/redux-devtools-extension
  composeWithDevTools(applyMiddleware(...middleware))
)
