// external
import * as React             from 'react'
import { render }             from 'react-dom'
import { Provider }           from 'react-redux'
import { createStore, Store } from 'redux'

// internal
import { ApplicationState } from './__redux__/ApplicationState'
import reducers             from './__redux__/reducers/index'
import App                  from './app'

const store: Store<ApplicationState> = createStore(
  reducers,
  ( window as any ).__REDUX_DEVTOOLS_EXTENSION__
  &&
  ( window as any ).__REDUX_DEVTOOLS_EXTENSION__(),
)

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById( 'app' )
)
