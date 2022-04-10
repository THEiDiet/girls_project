import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { appReducer, userReducer } from 'store/reducers'

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
  middleware: new MiddlewareArray().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
