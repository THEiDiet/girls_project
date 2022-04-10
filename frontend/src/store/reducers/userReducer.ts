import { createSlice } from '@reduxjs/toolkit'

import { UserInfoT } from 'types'

const initialState = {
  user: {} as UserInfoT,
}
const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload
    },
  },
})
export const { setUserData } = userSlice.actions
export const userReducer = userSlice.reducer
