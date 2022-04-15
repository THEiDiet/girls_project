import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { appReducer, userReducer } from 'store/reducers'
import { cardsPackReducer } from 'store/reducers/cardsPackReducer'
import { cardsReducer } from 'store/reducers/cardsReducer'
import { cardsReducer as packsReducer } from 'store/reducers/packsReducer'

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    pack: cardsPackReducer,
    cards: cardsReducer,
    packs: packsReducer,
  },
  middleware: new MiddlewareArray().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
