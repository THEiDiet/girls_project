/* eslint-disable */
import { instance } from 'api/config'

export const cardsAPI = {
  getCards(
      // cardsPack_id: string,
      // page: number, pageCount: number
  ) {
    return instance.get('/cards/card', {
      // params: {cardsPack_id},
      // params: {cardsPack_id, page, pageCount },
    })
  },

  addCard(cardsPack_id: string, question: string, answer: string) {
    const dataForPost = {
      card: {
        cardsPack_id,
        question,
        answer,
      },
    }
    return instance.post('cards/card', dataForPost)
  },
  deleteCard(cardId: string) {
    return instance.delete(`cards/card?id=${cardId}`)
  },
  updateCard(cardId: string, newQuestion: string, newAnswer: string) {
    const dataForPost = {
      card: {
        _id: cardId,
        question: newQuestion,
        answer: newAnswer,
      },
    }
    return instance.put('cards/card', dataForPost)
  },
  updateCardGrade(cardId: string, grade: number) {
    return instance.put<UpdateCardGradeType>('cards/grade', { cardId, grade })
  },
}

type UpdateCardGradeType = {
  _id: ''
  cardsPack_id: ''
  card_id: ''
  user_id: ''
  grade: number
  shots: number
}
export type CardType = {
  answer: string
  cardsPack_id: string
  comments: string
  created: string
  grade: number
  more_id: string
  question: string
  rating: number
  shots: number
  type: string
  updated: string
  user_id: string
  __v: number
  _id: string
}
