import { createStore } from 'redux'
import reducer from '../reducer'

const makeStore = initialState => {
  const store = createStore(reducer, initialState)

  if(module.hot) {
    module.hot.accept('../reducer/index', () => {
      console.log('Replacing reducer')
      store.replaceReducer(require('../reducer/index').default)
    })
  }

  return store;
}

export default makeStore
