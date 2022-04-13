import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { appReducer, userReducer } from 'store/reducers'

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
  middleware: new MiddlewareArray().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
