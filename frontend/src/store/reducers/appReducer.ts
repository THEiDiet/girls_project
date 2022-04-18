import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  errorMessage: 'Let me think',
  isAuthorized: false,
  isInitialized: false,
}
const appSlice = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    authorize: (state, action: PayloadAction<boolean>) => {
      state.isAuthorized = action.payload
    },
    initialize: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload
    },
  },
})
export const { authorize, initialize } = appSlice.actions
export const appReducer = appSlice.reducer

// @ts-ignore
window.store = appReducer
