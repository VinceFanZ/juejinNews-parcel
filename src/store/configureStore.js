import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import * as reducers from '../reducers'

export default function configureStore (history) {
  const middlewares = [
    routerMiddleware(history),
  ]

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({ collapsed: true })
    middlewares.push(logger)
  }

  const reducer = combineReducers({
    ...reducers,
    routing: routerReducer,
  })
  const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
  )

  return store
}
