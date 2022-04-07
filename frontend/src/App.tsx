import React, { ReactElement } from 'react'

import { Provider } from 'react-redux'

import 'App.scss'

import { Router } from 'components/routes'
import { store } from 'store/config'

const App = (): ReactElement => (
  <Provider store={store}>
    <div className="app">
      <Router />
    </div>
  </Provider>
)

export default App
