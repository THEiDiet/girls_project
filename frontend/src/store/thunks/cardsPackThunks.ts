import { AppDispatch } from '../config'

import { cardsPackApi } from 'api/cardsPackAPI'
import { getCardsAC } from 'store/reducers/cardsPackReducer'

export const getCardsPackTC = () => (dispatch: AppDispatch) => {
  cardsPackApi.getCardsPack().then(res => {
    dispatch(getCardsAC(res.data))
  })
}
