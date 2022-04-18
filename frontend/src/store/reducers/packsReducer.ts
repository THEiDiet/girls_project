import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PackType, GetPacksResponseT } from 'types'

const initialState = {
  currentPage: 1,
  amountOfElementsToShow: 10,
  packs: [] as PackType[],
  pageCount: 0,
  cardPacksTotalCount: 0,
  rangeValues: {
    minCardsCount: 0,
    maxCardsCount: 0,
  },
}

const packSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCurrentPageAC(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setAmountOfElementsToShow(state, action: PayloadAction<number>) {
      state.amountOfElementsToShow = action.payload
    },
    setPacks: (state, action: PayloadAction<GetPacksResponseT>) => {
      const {
        cardPacks,
        cardPacksTotalCount,
        minCardsCount,
        maxCardsCount,
        pageCount,
        page,
      } = action.payload
      state.packs = cardPacks
      state.rangeValues = { minCardsCount, maxCardsCount }
      state.currentPage = page
      state.pageCount = pageCount
      state.cardPacksTotalCount = cardPacksTotalCount
    },
  },
})

export const packsReducer = packSlice.reducer

export const { setCurrentPageAC, setAmountOfElementsToShow, setPacks } = packSlice.actions
