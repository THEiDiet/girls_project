import { createSlice } from '@reduxjs/toolkit'

import { PackType } from 'types'
import { PacksType } from 'types/CardsPackType'

const initialState = {
  packs: {
    minCardsCount: 0,
    maxCardsCount: 30,
    pageCount: 5,
    page: 1,
    cardPacks: [] as PackType[],
    cardPacksTotalCount: 0,
  } as unknown as PacksType,
  sort: '',
  searchPack: '',
  isMyPack: false,
  rerenderFlag: ['rerender'],
  localMinRage: 0,
  localMaxRage: 30,
  resultMessageAddPack: '',
}

const cardsPackSlice = createSlice({
  name: 'cardsPackSlice',
  initialState,
  reducers: {
    setPacksAC: (state, action) => {
      state.packs = action.payload
    },
    setSearchPacksAC: (state, action) => {
      state.packs = action.payload
    },
    setCurrentPageAC: (state, action) => {
      // state.pack.page = action.payload.page
    },
    setPageCountCardsAC: (state, action) => {
      state.packs.pageCount = action.payload.pageCount
    },
    rerenderPackAC: (state, action) => {
      state.packs = action.payload.rerender
    },
  },
})
export const {
  setPacksAC,
  setPageCountCardsAC,
  setCurrentPageAC,
  setSearchPacksAC,
  rerenderPackAC,
} = cardsPackSlice.actions
export const cardsPackReducer = cardsPackSlice.reducer
