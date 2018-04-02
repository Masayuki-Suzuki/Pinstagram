import { createStore, compose } from 'redux'
import reducer from '../reducer'

const makeStore = (initialState, isServer) => {
  const store = createStore(reducer, initialState)

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
