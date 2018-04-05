import { createStore, compose, applyMiddleware } from 'redux'
import reducer from '../reducer'

const reduxInvariant = require('redux-immutable-state-invariant')

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const middlewares = []
middlewares.push(reduxInvariant.default())

const makeStore = (initialState, isServer) => {
  const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middlewares)))

  if (module.hot) {
    module.hot.accept('../reducer/index', () => {
      console.log('Replacing reducer')
      store.replaceReducer(reducer.default)
    })
  }

  if (!isServer && typeof window !== 'undefined' && !window.store) {
    /* eslint max-len: 0 */
    window.store = createStore(reducer, initialState, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
    return window.store
  }
  return store
}

export default makeStore
