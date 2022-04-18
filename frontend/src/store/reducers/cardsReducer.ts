import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PackT } from 'types'

const initialState = {
  pack: {
    cards: [],
    pageCount: 5,
    page: 1,
    cardsTotalCount: 0,
    packUserId: '',
    maxGrade: 0,
    minGrade: 0,
  } as PackT,
  sort: '',
  searchAnswer: '',
  searchQuestion: '',
  rerenderFlag: ['rerender'],
}

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState,
  reducers: {
    setOnePack: (state, action: PayloadAction<PackT>) => {
      state.pack = action.payload
    },
  },
})
export const { setOnePack } = cardsSlice.actions
export const cardsReducer = cardsSlice.reducer
