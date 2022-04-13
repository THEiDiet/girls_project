import { createSlice } from '@reduxjs/toolkit'

import { UserInfoT } from 'types'

const initialState = {
  user: {} as UserInfoT,
  pack: {
    cardPacks: [
      {
        _id: '',
        user_id: '',
        name: '',
        cardsCount: '',
        created: '',
        updated: '',
      },
    ],
    cardPacksTotalCount: '',
    page: 1,
    pageCount: 5,
  },
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
    getCardsAC: (state, action) => {
      state.pack = action.payload
    },
    setCurrentCardsAC:(state, action) => {
      state.pack = action.payload
},
    setCurrentPageAC:(state, action) => {
      state.pack.page = action.payload.page
    }
  },
})
export const { setUserData, logOutAC, getCardsAC, setCurrentPageAC, setCurrentCardsAC } = userSlice.actions
export const userReducer = userSlice.reducer
