export type PackT = {
  cards: CardT[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
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

export type AddCardType = {
  cardsPackId: string
  answer?: string
  answerImg?: string
  answerVideo?: string
  question?: string
  questionImg?: string
  questionVideo?: string
  shots?: number
  grade?: number
}
