import { EPacksSort } from 'enums'

export type GetPacksResponseT = {
  cardPacks: PackType[]
  page: number
  pageCount: number
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  token: string
  tokenDeathTime: number
}

export type GetOnePackRequest = {
  cardAnswer: string
  cardQuestion: string
  cardsPackId: string
  min: number
  max: number
  sortCards: string
  page: number
  pageCount: number
}

export type PackType = {
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

export type SortT =
  | EPacksSort.Date
  | EPacksSort.Name
  | EPacksSort.UserName
  | EPacksSort.CardsCount

export type GetPacksPayload = {
  packName: string
  min: number
  max: number
  sortPacks: string
  pageCount: number
  page: number
  userId: string
}
