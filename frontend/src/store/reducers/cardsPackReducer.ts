import { createSlice } from '@reduxjs/toolkit'

export type SortPackType =
  | '0name'
  | '1name'
  | '0cardsCount'
  | '1cardsCount'
  | '0updated'
  | '1updated'
  | null

const initialState = {
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

const cardsPackSlice = createSlice({
  name: 'cardsPackSlice',
  initialState,
  reducers: {
    getCardsAC: (state, action) => {
      state.pack = action.payload
    },
    setCurrentCardsAC: (state, action) => {
      state.pack = action.payload
    },
    setCurrentPageAC: (state, action) => {
      state.pack.page = action.payload.page
    },
  },
})
export const { getCardsAC, setCurrentPageAC, setCurrentCardsAC } = cardsPackSlice.actions
export const cardsPackReducer = cardsPackSlice.reducer
