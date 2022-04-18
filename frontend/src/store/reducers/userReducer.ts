import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserInfoT } from 'types'

export type StateUserInfoT = {
  userId: string
  email: string
  name: string
  publicCardPacksCount: number
  created: string
  updated: string
  avatar: string
}

const initialState = {
  userInfo: {
    userId: '',
    email: '',
    name: '',
    publicCardPacksCount: 0,
    created: '',
    updated: '',
    avatar: '',
  } as StateUserInfoT,
}

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserInfoT>) => {
      const {
        _id: userId,
        email,
        name,
        publicCardPacksCount,
        created,
        updated,
        avatar,
      } = action.payload
      state.userInfo = {
        userId,
        email,
        name,
        created,
        updated,
        avatar,
        publicCardPacksCount,
      }
    },
    logOutAC: state => {
      state.userInfo = {} as StateUserInfoT
    },
  },
})
export const { setUserData, logOutAC } = userSlice.actions
export const userReducer = userSlice.reducer
