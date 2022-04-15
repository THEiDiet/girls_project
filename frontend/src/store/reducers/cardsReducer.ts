import { createSlice } from '@reduxjs/toolkit'

import { CardsType } from 'types'

const initialState = {
  pack: {
    cards: [
      {
        answer: '',
        answerImg: '',
        answerVideo: '',
        cardsPack_id: '',
        comments: '',
        created: '',
        grade: 0,
        more_id: '',
        rating: 0,
        shots: 0,
        type: '',
        updated: '',
        user_id: '',
        __v: 0,
        _id: '',
        question: '',
        questionImg: '',
        questionVideo: '',
      },
    ],
    pageCount: 5,
    page: 1,
  } as CardsType,
  sort: '',
  searchAnswer: '',
  searchQuestion: '',
  rerenderFlag: ['rerender'],
}

const cardsSlice = createSlice({
  name: 'cardsSlice',
  initialState,
  reducers: {
    setCardsAC: (state, action) => {
      state.pack = action.payload
    },
    // setCurrentCardsAC: (state, action) => {
    //   state.packs = action.payload
    // },
    // setCurrentPageAC: (state, action) => {
    //   // state.pack.page = action.payload.page
    // },
  },
})
export const { setCardsAC } = cardsSlice.actions
export const cardsReducer = cardsSlice.reducer
