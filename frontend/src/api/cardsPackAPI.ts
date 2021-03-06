import { instance } from 'api/config'
import { PackType } from 'types'

export const cardsPackApi = {
  getCardsPack(
    // packName: string,
    // min: number,
    // max: number,
    // sortPacks: string,
    pageCount: number,
    page: number,
    // userId: string,
  ) {
    return instance
      .get<PackType>('cards/pack', {
        params: {
          // packName,
          // min,
          // max,
          // sortPacks,
          pageCount,
          page,
          // user_id: userId,
        },
      })
      .then(res => res.data)
  },
  addCardPack(cardPackName: string) {
    const dataForPost: addCardsPackPostType = {
      cardsPack: {
        name: cardPackName,
      },
    }
    return instance.post<AddCardsPackResponseType>('cards/pack', dataForPost)
  },
  deleteCardPack(cardPackId: string) {
    return instance.delete(`cards/pack?id=${cardPackId}`)
  },
  updateCardPack(cardPackId: string, newName: string) {
    const dataForPost: updateCardsPackPostType = {
      cardsPack: {
        _id: cardPackId,
        name: newName,
      },
    }
    return instance.put('cards/pack', dataForPost)
  },
}

export type CardsPackType = {
  cardsCount: number
  created: string
  deckCover?: string
  grade: number // средняя оценка карточек
  more_id: string
  name: string
  path: string // папка
  private: boolean
  rating: number // лайки
  shots: number // количество попыток
  type: string // ещё будет "folder" (папка)
  updated: string
  user_id: string
  user_name: string
  __v: number
  _id: string
}
type addCardsPackPostType = {
  cardsPack: {
    name?: string
    path?: string
    grade?: number
    shots?: number
    rating?: number
    deckCover?: 'url' | 'base64'
    private?: boolean
    type?: string
  }
}
type updateCardsPackPostType = {
  cardsPack: {
    _id: string
    name?: string // не обязательно
  }
}
type GetCardsPackResponseType = {
  cardPacks: Array<CardsPackType>
  cardPacksTotalCount: number // количество колод
  maxCardsCount: number
  minCardsCount: number
  page: number // выбранная страница
  pageCount: number // количество элементов на странице
}
type AddCardsPackResponseType = GetCardsPackResponseType & {
  token: string
  tokenDeathTime: number
}
