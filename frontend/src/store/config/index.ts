import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { testReducer } from 'store/reducers'

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
  middleware: new MiddlewareArray().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
