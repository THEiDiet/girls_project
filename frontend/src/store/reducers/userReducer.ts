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
    logOutAC: state => {
      state.user = {} as UserInfoT
    },
  },
})
export const { setUserData, logOutAC } = userSlice.actions
export const userReducer = userSlice.reducer
