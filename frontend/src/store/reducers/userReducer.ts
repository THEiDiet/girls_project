import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  userName: '',
}
const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.userName = action.payload
      console.log(action.payload)
    },
  },
})
export const { login } = userSlice.actions
export const userReducer = userSlice.reducer

// @ts-ignore
window.username = userSlice
