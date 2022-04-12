import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isAuthorized: false,
  isInitialized: false,
  isFetching: false,
}
const testSlice = createSlice({
  name: 'testReducer',
  initialState,
  reducers: {
    authorize: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload
    },
    initialize: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload
    },
    authLogout: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload
    },
  },
})
export const { authorize, initialize, authLogout } = testSlice.actions
export const appReducer = testSlice.reducer

// @ts-ignore
window.store = appReducer
