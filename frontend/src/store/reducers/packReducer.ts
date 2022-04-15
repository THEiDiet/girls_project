import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PackT = {
  cards: CardT[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
}

export type CardsPackT = {
  _id: string
  user_id: string
  user_name: string
  private: boolean
  name: string
  path: string
  grade: number
  shots: number
  cardsCount: number
  type: string
  rating: number
  created: string
  updated: string
  more_id: string
  __v: number
}

type CardT = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  shots: number
  user_id: string
  created: string
  updated: string
  _id: string
}

export type GetPackResponseT = {
  cardPacks: CardsPackT[]
  page: number
  pageCount: number
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  token: string
  tokenDeathTime: number
}

export enum EPacksSort {
  Name = 'name',
  UserName = 'user_name',
  Date = 'updated',
  CardsCount = 'cardsCount',
}

const initialState = {
  currentPage: 1,
  amountOfElementsToShow: 10,
  totalPacksCount: 4660,
  packs: [] as CardsPackT[],
  page: 1,
  pageCount: 0,
  cardPacksTotalCount: 0,
  rangeValues: {
    minCardsCount: 0,
    maxCardsCount: 0,
  },
  currentPack: null as unknown as PackT,
  revert: {
    [EPacksSort.Name]: false,
    [EPacksSort.UserName]: false,
    [EPacksSort.Date]: false,
    [EPacksSort.CardsCount]: false,
  },
  actualPacks: [] as CardsPackT[],
}

const packSlice = createSlice({
  name: 'packReducer',
  initialState,
  reducers: {
    setPackData: (state, action) => {
      // state.packs = action.payload
    },
    getCardsAC: (state, action: PayloadAction<GetPackResponseT>) => {
      state.packs = action.payload.cardPacks
      state.actualPacks = action.payload.cardPacks
    },
    filterPacks: (state, action: PayloadAction<string>) => {
      const filteredPacks = state.packs.filter(
        pack => pack.name.toLowerCase() === action.payload.toLowerCase(),
      )
      state.actualPacks = filteredPacks
    },
    setCurrentCardsAC: (state, action) => {
      // state.pack = action.payload
    },
  },
})
export const { setPackData, getCardsAC, setCurrentCardsAC, filterPacks } = packSlice.actions
export const packReducer = packSlice.reducer
