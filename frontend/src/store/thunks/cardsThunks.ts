import { AppDispatch } from '../config'

import { cardsAPI } from 'api/cardsApi'

export const getCardsTC = () => (dispatch: AppDispatch) => {
  cardsAPI.getCards().then(res => {
    console.log(res.data)
  })
}
